import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppShell } from '../src/App';
import { BASE_URL, getRouteMeta, getStaticRoutes } from '../src/lib/siteMeta';

const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');

function injectMeta(html: string, routePath: string) {
  const meta = getRouteMeta(routePath);
  const schemaMarkup = meta.schemas
    .map((schema, index) => {
      const payload = JSON.stringify(schema).replace(/</g, '\\u003c');
      return `<script type="application/ld+json" data-schema="${index}">${payload}</script>`;
    })
    .join('\n    ');

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${meta.description}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${meta.title}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${meta.description}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${BASE_URL}${meta.path}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${meta.title}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${meta.description}" />`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${BASE_URL}${meta.path}" />`,
    )
    .replace('</head>', `    ${schemaMarkup}\n  </head>`);
}

async function writeRoute(routePath: string, template: string) {
  const appHtml = renderToString(
    <StaticRouter location={routePath}>
      <AppShell />
    </StaticRouter>,
  );

  const hydratedHtml = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const finalHtml = injectMeta(hydratedHtml, routePath);
  const outputPath =
    routePath === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, routePath.replace(/^\//, ''), 'index.html');

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, finalHtml, 'utf8');
}

async function main() {
  const template = await fs.readFile(templatePath, 'utf8');
  await Promise.all(getStaticRoutes().map((routePath) => writeRoute(routePath, template)));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
