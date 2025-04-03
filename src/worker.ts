import { getAssetFromKV } from '@cloudflare/kv-asset-handler';
import type { ExecutionContext } from '@cloudflare/workers-types';

interface Env {
  VITE_SUPABASE_URL: string;
  VITE_SUPABASE_ANON_KEY: string;
  __STATIC_CONTENT: any;
  __STATIC_CONTENT_MANIFEST: any;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    try {
      // Set environment variables for the application
      globalThis.VITE_SUPABASE_URL = env.VITE_SUPABASE_URL;
      globalThis.VITE_SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY;

      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
        }
      );
    } catch (e) {
      let pathname = new URL(request.url).pathname;
      return new Response(`"${pathname}" not found`, {
        status: 404,
        statusText: 'not found',
      });
    }
  },
}; 