import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
import { cryptEmail } from "@utils/CryptEmail.js";
import { client } from '@lib/tursoDb.ts';

export const server = {
    sendMail: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string(),
            email: z.string().email(),
            message: z.string()
        }),
        handler: async (input) => {
            const name = input.name;
            const email = await cryptEmail(input.email);
            const message = input.message;
            const result = await client.batch(
                [
                    {
                        sql: 'INSERT INTO buzon(name, email, message) VALUES(?, ?, ?)',
                        args: [name, email, message],
                    },
                ],
                "write",
            );
            console.log(result);
            /*name: name,
                email: email,
                    message: message,
            })*/
            if (!result) {
                throw new ActionError({
                    code: 'BAD_REQUEST',
                    message: 'Error al enviar el mensaje',
                });
            }
            return ({
                success: true,
                message: 'Mensaje enviado correctamente',
            })
        },
    })
}
