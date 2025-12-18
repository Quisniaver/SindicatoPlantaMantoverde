export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);

    // Ruta principal (solo para probar)
    if (url.pathname === "/") {
      return new Response("CMS Auth Worker OK", { status: 200 });
    }

    // Ruta que usa Decap CMS
    if (url.pathname === "/auth") {
      const redirectUrl =
        "https://github.com/login/oauth/authorize" +
        `?client_id=${env.GITHUB_CLIENT_ID}` +
        "&scope=repo";

      return Response.redirect(redirectUrl, 302);
    }

    return new Response("Not Found", { status: 404 });
  },
};
