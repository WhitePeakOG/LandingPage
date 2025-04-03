import { createClient } from "@supabase/supabase-js";

// Get environment variables from either Vite or Cloudflare Workers
const getEnvVar = (key: string, fallback: string): string => {
  // Try Cloudflare Workers environment first
  if (typeof globalThis !== 'undefined' && globalThis[key]) {
    return globalThis[key];
  }
  // Try Vite environment
  if (import.meta.env[key]) {
    return import.meta.env[key];
  }
  // Try process.env (for Node.js environment)
  if (typeof process !== 'undefined' && process.env[key]) {
    return process.env[key];
  }
  return fallback;
};

const supabaseUrl = getEnvVar(
  "VITE_SUPABASE_URL",
  "https://your-project-id.supabase.co"
);
const supabaseAnonKey = getEnvVar(
  "VITE_SUPABASE_ANON_KEY",
  "your-anon-key"
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
