import { createStorybookMcpHandler } from '@storybook/mcp';

interface Env {
  STORYBOOK_URL: string;
}

// Manifests are fetched on every request, so the endpoint always reflects the
// latest Storybook deployed to GitHub Pages.
const handler = await createStorybookMcpHandler({
  manifestProvider: async () => {
    throw new Error('manifestProvider is set per request');
  },
});

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname !== '/mcp') {
      return new Response('Storybook MCP server. Connect to /mcp', { status: 404 });
    }

    const base = env.STORYBOOK_URL.replace(/\/$/, '');
    return handler(request, {
      request,
      manifestProvider: async (_req, path) => {
        const res = await fetch(`${base}/${path.replace(/^\.\//, '')}`, {
          cf: { cacheTtl: 60 },
        } as RequestInit);
        if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
        return res.text();
      },
    });
  },
};
