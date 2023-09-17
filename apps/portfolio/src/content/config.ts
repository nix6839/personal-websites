import { defineCollection, reference, z } from 'astro:content';

const worksCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      cover: image(),
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      techs: z.array(reference('techs')),
    }),
});

const techsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    fullName: z.string().nonempty(),
    icon: z.string().nonempty(),
  }),
});

export const collections = {
  works: worksCollection,
  techs: techsCollection,
};
