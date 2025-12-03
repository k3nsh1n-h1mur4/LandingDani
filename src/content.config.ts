import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
import { object } from "astro:schema";

const albums = defineCollection({ 
    loader: glob({ pattern: "*.yaml" , base: "./src/albums/" }),
    //type: "data",
    schema: ({ image }) =>  
        z.object({
            title: z.string(),
            description: z.string().optional(),
            cover: image(),
        })  
});


const biography = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/bio/" }),
    schema: object({
        logo: z.string(),
        titulo: z.string(),
        biografia: z.string(),
        photo: z.string(),
    })
})

export const collections = { albums, biography};