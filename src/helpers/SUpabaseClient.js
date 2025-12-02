import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://favhepjcoopuoyzqefsi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhdmhlcGpjb29wdW95enFlZnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NzIxMzQsImV4cCI6MjA4MDE0ODEzNH0.oL1F2tUyTrRAIKAKxzvXLDncZ-YkrAZfHmaIV0jhVHc'
const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log(supabase)
export default supabase;