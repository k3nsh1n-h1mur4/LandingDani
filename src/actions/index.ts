import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
import { supabase } from "@helpers/SUpabaseClient.js";


export const server = {
    sendMail: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string(),
            email: z.string().email(),
            message: z.string()
        }),
        handler: async ({ name, email, message }) => {
            const {  error } = await supabase.from('buzon').insert({
                name: name,
                email: email,
                message: message,
            })
            if (error) {
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
