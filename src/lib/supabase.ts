import { createClient } from "@supabase/supabase-js";

// Get environment variables from either Vite or Cloudflare Workers
const getEnvVar = (key: string, fallback: string): string => {
  // Try Vite environment first
  if (import.meta.env[key]) {
    return import.meta.env[key];
  }
  // Try Cloudflare Workers environment
  if (globalThis[key]) {
    return globalThis[key];
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
