import { getPermalink } from './utils/permalinks';

export const getHeaderData = (lang = 'fr') => {
  const translations = {
    fr: {
      home: 'Accueil',
      games: 'Games',
      vps: 'VPS',
      services: 'Services',
      clientArea: 'Espace Client',
      language: 'Langue',
      lowCost: 'Low Cost',
      gaming: 'Gaming',
      botDiscord: 'Bot Discord',
      database: 'Database',
      lavalink: 'Lavalink',
      news: 'Actualités',
      allNews: 'Toutes les actualités',
      gameNews: 'Actualités jeux',
      serviceNews: 'Actualités services',
      companyNews: 'Actualités société',
    },
    en: {
      home: 'Home',
      games: 'Games',
      vps: 'VPS',
      services: 'Services',
      clientArea: 'Client Area',
      language: 'Language',
      lowCost: 'Low Cost',
      gaming: 'Gaming',
      botDiscord: 'Bot Discord',
      database: 'Database',
      lavalink: 'Lavalink',
      news: 'News',
      allNews: 'All News',
      gameNews: 'Game News',
      serviceNews: 'Service News',
      companyNews: 'Company News',
    },
  };

  const t = translations[lang] || translations.fr;

  return {
    links: [
      {
        text: t.home,
        href: getPermalink(`/${lang}/`),
      },
      {
        text: t.games,
        links: [
          { text: 'FiveM', href: getPermalink(`/${lang}/games/fivem`) },
          { text: 'Minecraft', href: getPermalink(`/${lang}/games/minecraft`) },
        ],
      },
      {
        text: t.vps,
        links: [
          { text: t.lowCost, href: getPermalink(`/${lang}/vps/lowcost`) },
          { text: t.gaming, href: getPermalink(`/${lang}/vps/gaming`) },
        ],
      },
      {
        text: t.services,
        links: [
          { text: t.botDiscord, href: getPermalink(`/${lang}/services/botdiscord`) },
          { text: t.database, href: getPermalink(`/${lang}/services/database`) },
          { text: t.lavalink, href: getPermalink(`/${lang}/services/lavalink`) },
        ],
      },
      {
        text: t.news,
        links: [
          { text: t.allNews, href: getPermalink(`/${lang}/news`) },
        ],
      },
    ],
    actions: [
      { text: t.clientArea, href: getPermalink(`https://hebergtonserv.com/store/login`), target: '_self' },
    ],
    languageSelector: [
      { code: 'fr', label: 'Français' },
      { code: 'en', label: 'English' },
    ]
  };
};

export const getFooterData = (lang = 'fr') => {
  // Données pour le footer en fonction de la langue
  const socialLinks = [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/hebergtonserv' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/hebergtonserv' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/hebergtonserv' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/hebergtonserv' },
  ];

  // Liens secondaires (termes et confidentialité)
  const secondaryLinks = [
    { text: lang === 'fr' ? 'Conditions Générales' : 'Terms & Conditions', href: getPermalink('/terms') },
    { text: lang === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy', href: getPermalink('/privacy') },
  ];

  // Liens principaux organisés par catégorie
  const links = [
    {
      title: lang === 'fr' ? 'Hébergement' : 'Hosting',
      links: [
        { text: 'FiveM', href: getPermalink(`/${lang}/games/fivem`) },
        { text: 'Minecraft', href: getPermalink(`/${lang}/games/minecraft`) },
        { text: 'VPS Low Cost', href: getPermalink(`/${lang}/vps/lowcost`) },
        { text: 'VPS Gaming', href: getPermalink(`/${lang}/vps/gaming`) },
      ],
    },
    {
      title: lang === 'fr' ? 'Services' : 'Services',
      links: [
        { text: 'Bot Discord', href: getPermalink(`/${lang}/services/botdiscord`) },
        { text: 'Database', href: getPermalink(`/${lang}/services/database`) },
        { text: 'Lavalink', href: getPermalink(`/${lang}/services/lavalink`) },
      ],
    },
    {
      title: lang === 'fr' ? 'Entreprise' : 'Company',
      links: [
        { text: lang === 'fr' ? 'À propos' : 'About', href: getPermalink(`/${lang}/about`) },
        { text: lang === 'fr' ? 'Actualités' : 'News', href: getPermalink(`/${lang}/news`) },
        { text: lang === 'fr' ? 'Contact' : 'Contact', href: getPermalink(`/${lang}/contact`) },
        { text: lang === 'fr' ? 'Espace Client' : 'Client Area', href: 'https://hebergtonserv.com/store/login', target: '_blank' },
      ],
    },
  ];

  // Note de bas de page (copyright)
  const footNote = `© ${new Date().getFullYear()} HebergTonServ. ${lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}`;

  return {
    socialLinks,
    secondaryLinks,
    links,
    footNote,
    theme: 'dark'
  };
};