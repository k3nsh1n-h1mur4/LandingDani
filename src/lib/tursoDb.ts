//import { createClient } from "@libsql/client/web";
//import { createClient } from "@libsql/client/http";
import { createClient } from "@libsql/client/web";


export const client = createClient({
  url: import.meta.env.TURSO_DATABASE_URL,
  authToken: import.meta.env.TURSO_AUTH_TOKEN,
});

console.log(client)
