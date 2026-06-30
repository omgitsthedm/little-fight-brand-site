import { useEffect } from 'react';
import { BASE_URL, DEFAULT_DESCRIPTION, DEFAULT_IMAGE, DEFAULT_TITLE } from '../lib/siteMeta';

interface PageMetaInput {
  title?: string;
  description?: string;
  path?: string;
}

function upsertMeta(selector: string, attribute: string, value: string) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!element) {
    element = selector.startsWith('link')
      ? document.createElement('link')
      : document.createElement('meta');

    if (selector.startsWith('link')) {
      (element as HTMLLinkElement).rel = 'canonical';
    } else {
      const [, name, metaValue] = selector.match(/meta\[(name|property)="(.+)"\]/) ?? [];
      if (name) {
        element.setAttribute(name, metaValue);
      }
    }

    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

export function usePageMeta({ title, description, path }: PageMetaInput = {}) {
  useEffect(() => {
    const finalTitle = title
      ? title.length > 48
        ? title
        : `${title} | Little Fight NYC`
      : DEFAULT_TITLE;
    const finalDescription = description ?? DEFAULT_DESCRIPTION;
    const finalPath = path ?? `${window.location.pathname}${window.location.search}`;
    const canonical = `${BASE_URL}${finalPath}`;

    document.title = finalTitle;
    upsertMeta('meta[name="description"]', 'content', finalDescription);
    upsertMeta('meta[property="og:title"]', 'content', finalTitle);
    upsertMeta('meta[property="og:description"]', 'content', finalDescription);
    upsertMeta('meta[property="og:url"]', 'content', canonical);
    upsertMeta('meta[property="og:image"]', 'content', DEFAULT_IMAGE);
    upsertMeta('meta[name="twitter:title"]', 'content', finalTitle);
    upsertMeta('meta[name="twitter:description"]', 'content', finalDescription);
    upsertMeta('meta[name="twitter:image"]', 'content', DEFAULT_IMAGE);
    upsertMeta('link[rel="canonical"]', 'href', canonical);
  }, [description, path, title]);
}
