export default async (request) => {
  const url = new URL(request.url);
  if (url.hostname === "hey.littlefightnyc.com") {
    url.hostname = "littlefightnyc.com";
    return Response.redirect(url.toString(), 301);
  }
};

export const config = { path: "/*" };
