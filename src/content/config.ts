import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});
const gameCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metadata: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      tagline: z.string(),
      title: z.string(),
      subtitle: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      actions: z.array(
        z.object({
          variant: z.string(),
          text: z.string(),
          href: z.string(),
        })
      ),
    }),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
    pricing: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        price: z.string(),
        period: z.string(),
        items: z.array(
          z.object({
            description: z.string(), // Description de l'item
            icon: z.string().optional(), // Icône optionnelle
          })
        ),
        callToAction: z.object({
          text: z.string(),
          href: z.string(),
        }),
      })
    ),
    faqs: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
    testimonials: z.array(
      z.object({
        testimonial: z.string(),
        name: z.string(),
        job: z.string(),
      })
    ),
    contact: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),
});



export const collections = {
  post: postCollection,
  game: gameCollection,
};
