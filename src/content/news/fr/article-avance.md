---
title: "Configuration de la Chaîne de Connexion MySQL pour un Serveur FiveM"
description: "Instructions complètes pour configurer la chaîne de connexion MySQL compatible avec oxmysql et mysql-async pour votre serveur FiveM"
excerpt: "Guide détaillé pour mettre à jour votre configuration MySQL et assurer la compatibilité avec les dernières versions d'oxmysql sur FiveM."
image: "https://res.cloudinary.com/da68srujg/image/upload/v1750596427/t%C3%A9l%C3%A9chargement_1_i6moaf.png"
imageAlt: "Configuration MySQL pour serveur FiveM"
publishDate: "2025-03-17"
category: "fivem"
tags: ["mysql", "fivem", "oxmysql", "configuration", "base-de-données"]
author: "Yavuz KESKIN"
language: "fr"
translationKey: "mysql-connection-fivem-guide"
---

# Configuration de la Chaîne de Connexion MySQL pour un Serveur FiveM

Cette page fournit des instructions sur la mise à jour de la chaîne de connexion MySQL pour être compatible avec `oxmysql` et `mysql-async`, utilisée spécifiquement pour configurer un serveur FiveM.

## Chaîne de Connexion Obsolète

La chaîne de connexion suivante est désormais obsolète pour `oxmysql` :

```text
set mysql_connection_string "server=IP_PHP_SANS_PORTS;database=NOM;userid=NOM_UTILISATEUR_PHP;password=MOT_DE_PASSE_PHP"
```

Ce format peut ne pas fonctionner avec les dernières versions de `oxmysql` et nécessite une mise à jour.

## Chaîne de Connexion Mise à Jour

Pour la compatibilité avec `oxmysql` et `mysql-async`, utilisez la chaîne de connexion suivante :

```text
set mysql_connection_string "mysql://NOM_UTILISATEUR_PHP:MOT_DE_PASSE_PHP@IP_PHP_SANS_PORTS/NOM?charset=utf8mb4"
```

Remplacez `NOM_UTILISATEUR_PHP`, `MOT_DE_PASSE_PHP`, `IP_PHP_SANS_PORTS`, et `NOM` avec vos propres informations. Assurez-vous que le mot de passe ne contient pas de '@'.

## Utilisation pour Serveur FiveM

- Ajoutez cette chaîne dans le fichier `server.cfg` de votre serveur FiveM pour la connexion à la base de données.

## Test de la Connexion

- Après avoir mis à jour la configuration, redémarrez votre serveur FiveM pour appliquer les changements.
- Vérifiez que votre serveur FiveM peut se connecter correctement à la base de données MySQL.
- En cas de problème, revérifiez les informations de connexion et les paramètres du serveur MySQL.

### Ressources Supplémentaires

- Vidéo Exemple : [Connexion à PHPMyAdmin](https://www.twitch.tv/videos/1553873661)
- Image Exemple : ![Configuration de la Connexion](https://cdn.discordapp.com/attachments/904885146468106280/1016760495103025185/sql_connect.png)

Gardez vos informations de connexion sécurisées et n'hésitez pas à demander de l'aide si nécessaire.