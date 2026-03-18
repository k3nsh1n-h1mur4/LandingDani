//import { createClient } from "@libsql/client/web";
//import { createClient } from "@libsql/client/http";

import { createClient } from "@libsql/client";


export const client = createClient({
  url: import.meta.env.ASTRO_REMOTE_DATABASE_URL,
  authToken: import.meta.env.ASTRO_REMOTE_AUTH_TOKEN,
})
