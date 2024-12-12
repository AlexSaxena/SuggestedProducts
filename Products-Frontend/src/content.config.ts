import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

// Define your collection(s)
const products = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/products" }),
  schema: z.object({
    id: z.string().uuid(),
    name: z.string(),
    description: z.string(),
    price: z.string(),
    imageSrc: z.string().url(),   
  }),
});

export const collections = { products };
