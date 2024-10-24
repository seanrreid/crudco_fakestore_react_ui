// https://supabase.com/docs/reference/javascript/initializing
import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_API_KEY;

const supabase = createClient(url, key);

export default supabase;
