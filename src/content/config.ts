import { defineCollection, z } from 'astro:content';

// Blog Collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum([
      'grados-discapacidad',
      'tipos-discapacidad',
      'procedimientos',
      'beneficios-ayudas',
      'legislacion',
      'casos-exito',
    ]),
    tags: z.array(z.string()).optional(),
    author: z.string().default('Equipo Grados de Discapacidad'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Provincias Collection
const provinciasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    capital: z.string(),
    comunidad: z.string(),
    poblacion: z.number().optional(),
    descripcion: z.string(),
    metaDescription: z.string(),
  }),
});

// Legal Pages Collection
const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lastUpdated: z.coerce.date(),
  }),
});

export const collections = {
  blog: blogCollection,
  provincias: provinciasCollection,
  legal: legalCollection,
};
