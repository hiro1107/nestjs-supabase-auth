import { SupabaseClientOptions } from "@supabase/supabase-js";
import { JwtFromRequestFunction } from "passport-jwt";

export interface SupabaseAuthStrategyOptions {
  supabaseUrl: string;
  supabaseKey: string;
  supabaseOptions: SupabaseClientOptions;
  extractor: JwtFromRequestFunction;
}
