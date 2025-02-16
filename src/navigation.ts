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
      text: 'Services',
      links: [
        {
          text: 'Infogérance',
          href: getPermalink('/services/infogerance'),
        },
        {
          text: 'Migration de Sites',
          href: getPermalink('/services/migration'),
        },
        {
          text: 'Sauvegardes Automatiques',
          href: getPermalink('/services/sauvegardes'),
        },
        {
          text: 'Protection Anti-DDoS',
          href: getPermalink('/services/anti-ddos'),
        },
        {
          text: 'SSL et Sécurité',
          href: getPermalink('/services/ssl-securite'),
        },
      ],
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
