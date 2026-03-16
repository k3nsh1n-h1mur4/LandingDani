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

const galeria = defineCollection({ 
    loader: glob({ pattern: "*.md" , base: "./src/content/2026" }),
    //type: "data",
    schema: ({ image }) =>  
        z.object({
            title: z.string(),
            cover: image(),
            coverAlt: z.string(),
        })  
});

const comisionSalud = defineCollection({ 
    loader: glob({ pattern: "*.md" , base: "./src/content/comisionsalud" }),
    //type: "data",
    schema: ({ image }) =>  
        z.object({
            title: z.string(),
            cover: image(),
            coverAlt: z.string(),
        })  
});

const comisionPrevision = defineCollection({ 
    loader: glob({ pattern: "*.md" , base: "./src/content/comisionprevision" }),
    //type: "data",
    schema: ({ image }) =>  
        z.object({
            title: z.string(),
            cover: image(),
            coverAlt: z.string(),
        })  
});
export const collections = { albums, biography, galeria, comisionSalud, comisionPrevision };
