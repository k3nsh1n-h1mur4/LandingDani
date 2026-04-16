export const prerender = false;
import  type { APIRoute } from "astro";

import Form from "@components/Form.astro";

<Form />

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  if (!name || !email || !message) {
    return new Response(
      JSON.stringfy({
        message: "Missing required fields",
      }),
      { status: 400 }
    ),
  }
}


  /*
  return new Response(
    JSON.stringfy({
      message: "Success!",
    }),
    { status: 200 }
  );
};*/

