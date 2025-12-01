import { defineAction } from "astro:actions";
import { z } from "astro:schema";


export const server = {
    sendMail: defineAction({
        accept: 'form',
        input: z.object({
            userName: z.string(),
            email: z.string().email(),
            message: z.string()
        }),
        handler: async (res) => {
            const { userName, email, message } = res;
            console.log(userName, email, message)

        }
    })
}
