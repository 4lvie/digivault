import { createClient } from "@supabase/supabase-js";

/**
 * Supabase client instance configured with environment variables
 * Provides database access, authentication, and storage functionality
 * @constant {SupabaseClient} client - Initialized Supabase client
 */
export const client = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
