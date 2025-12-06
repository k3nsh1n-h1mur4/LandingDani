import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_KEY,
    {
        auth: {
            flowType: "pkce",
        },
    },
)

export default supabaseClient;