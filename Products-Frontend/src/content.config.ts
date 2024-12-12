import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

// Define your collection(s)
const products = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/products" }),
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = { products };
