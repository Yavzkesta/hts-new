import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: 'Offres',
      links: [
        {
          text: 'Hébergement Web',
          href: getPermalink('/offres/hebergement-web'),
        },
        {
          text: 'Serveurs VPS',
          href: getPermalink('/offres/serveurs-vps'),
        },
        {
          text: 'Serveurs Dédiés',
          href: getPermalink('/offres/serveurs-dedies'),
        },
        {
          text: 'Hébergement Cloud',
          href: getPermalink('/offres/hebergement-cloud'),
        },
        {
          text: 'Nom de Domaine',
          href: getPermalink('/offres/noms-de-domaine'),
        },
      ],
    },
    {
      text: 'Docs',
      href: getPermalink('/docs')
    },
    {
      text: 'À propos',
      links: [
        {
          text: 'Notre Histoire',
          href: getPermalink('/a-propos/notre-histoire'),
        },
        {
          text: 'Équipe',
          href: getPermalink('/a-propos/equipe'),
        },
        {
          text: 'Nos Datacenters',
          href: getPermalink('/a-propos/datacenters'),
        },
        {
          text: 'Engagement Écologique',
          href: getPermalink('/a-propos/engagement-ecologique'),
        },
        {
          text: 'Partenaires',
          href: getPermalink('/a-propos/partenaires'),
        },
      ],
    },
    {
      text: 'Support',
      links: [
        {
          text: 'Centre d\'Aide',
          href: getPermalink('/support/centre-aide'),
        },
        {
          text: 'Documentation',
          href: getPermalink('/support/documentation'),
        },
        {
          text: 'Forum Communautaire',
          href: getPermalink('/support/forum'),
        },
        {
          text: 'Contactez-nous',
          href: getPermalink('/support/contact'),
        },
        {
          text: 'État des Services',
          href: getPermalink('/support/etat-services'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
  ],
  actions: [
    { text: 'Créer un Compte', href: getPermalink('/inscription'), target: '_self' },
    { text: 'Se Connecter', href: getPermalink('/connexion'), target: '_self' },
  ],
};

export const footerData = {
  // links: [
  //   {
  //     title: 'Product',
  //     links: [
  //       { text: 'Features', href: '#' },
  //       { text: 'Security', href: '#' },
  //       { text: 'Team', href: '#' },
  //       { text: 'Enterprise', href: '#' },
  //       { text: 'Customer stories', href: '#' },
  //       { text: 'Pricing', href: '#' },
  //       { text: 'Resources', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Platform',
  //     links: [
  //       { text: 'Developer API', href: '#' },
  //       { text: 'Partners', href: '#' },
  //       { text: 'Atom', href: '#' },
  //       { text: 'Electron', href: '#' },
  //       { text: 'AstroWind Desktop', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Support',
  //     links: [
  //       { text: 'Docs', href: '#' },
  //       { text: 'Community Forum', href: '#' },
  //       { text: 'Professional Services', href: '#' },
  //       { text: 'Skills', href: '#' },
  //       { text: 'Status', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Company',
  //     links: [
  //       { text: 'About', href: '#' },
  //       { text: 'Blog', href: '#' },
  //       { text: 'Careers', href: '#' },
  //       { text: 'Press', href: '#' },
  //       { text: 'Inclusion', href: '#' },
  //       { text: 'Social Impact', href: '#' },
  //       { text: 'Shop', href: '#' },
  //     ],
  //   },
  // ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  // ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};