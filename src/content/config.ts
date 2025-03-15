import { z, defineCollection } from 'astro:content';

const gameCollection = defineCollection({
  schema: z.object({
    language: z.enum(['fr', 'en']).default('fr'),
    translationKey: z.string(),
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
            description: z.string(),
            icon: z.string().optional(),
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

// Définir d'autres collections si nécessaire
const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    canonical: z.string().optional(),
    publishDate: z.string().optional(),
    draft: z.boolean().optional(),
    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  game: gameCollection,
  docs: docsCollection,
};