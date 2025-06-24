import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import HebergTonServ from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',

  integrations: [
    // Configuration optimisée de Tailwind
    tailwind({
      applyBaseStyles: false,
      // Configuration pour extraire les styles critiques
      config: {
        applyBaseStyles: false,
        darkMode: 'class',
        // Optimisations pour la production
        future: {
          hoverOnlyWhenSupported: true,
        }
      }
    }), 
    sitemap(), 
    mdx(), 
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }), 
    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ), 
    compress({
      CSS: {
        // Amélioration de la compression CSS pour Tailwind
        cssnano: {
          preset: ['advanced', {
            discardComments: { removeAll: true },
            discardUnused: true,
            mergeIdents: true,
            reduceIdents: true,
            zindex: false,
          }],
        },
      },
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          sortAttributes: true,
          sortClassName: true,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }), 
    HebergTonServ({
      config: './src/config.yaml',
    })
  ],

  image: {
    domains: [
      'cdn.pixabay.com',
      'res.cloudinary.com'
    ],
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' }
    ],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    build: {
      // Optimisation spécifique pour Tailwind CSS
      cssCodeSplit: true,
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          // Séparer les CSS en chunks pour un meilleur chargement
          manualChunks(id) {
            // Séparer AOS dans son propre fichier
            if (id.includes('aos')) {
              return 'aos';
            }
            // Séparer les styles de terms dans leur propre fichier
            if (id.includes('terms')) {
              return 'terms';
            }
            // Autres règles de chunking si nécessaire
          },
          // Optimiser les noms de fichiers pour un meilleur cache
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash][extname]',
        }
      }
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    // Optimisation du CSS
    css: {
      devSourcemap: false,
      preprocessorOptions: {
        // Options pour les préprocesseurs CSS si nécessaire
      }
    },
  },
});