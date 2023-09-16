import { defineCollection, z } from 'astro:content';

const worksCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      cover: image(),
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      techs: z
        .enum([
          'javascript',
          'typescript',
          'react',
          'astro',
          'tailwind',

          'prettier',
          'eslint',
          'github-actions',

          'cloudflare-pages',
          'chrome-web-store',
        ])
        .array()
        .nonempty(),
    }),
});

export const collections = {
  works: worksCollection,
};
