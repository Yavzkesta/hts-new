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
  // Vous pouvez ajouter des traductions pour le footer ici
  return {
    // ...footerData
  };
};