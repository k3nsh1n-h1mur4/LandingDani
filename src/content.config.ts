import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

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


export const collections = { albums, };