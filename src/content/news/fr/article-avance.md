---
title: "Guide de formatage Markdown avancé"
description: "Apprenez à utiliser toutes les fonctionnalités de formatage avancées dans notre système de blog"
excerpt: "Un guide complet de toutes les options de formatage avancées disponibles dans notre système de blog."
image: "https://placehold.co/1200x600/1F2937/FFFFFF?text=Guide+Markdown+Avanc%C3%A9"
imageAlt: "Guide de formatage Markdown avancé"
publishDate: "2025-03-17"
category: "fivem"
tags: ["markdown", "formatage", "guide"]
author: "Jean Dupont"
language: "fr"
translationKey: "advanced-markdown-guide"
---

# Guide de formatage Markdown avancé

Bienvenue dans notre guide de formatage Markdown avancé. Cet article démontre toutes les options de formatage riches disponibles dans notre système de blog.

## Formatage de texte de base

Vous pouvez formater le texte de différentes manières :

- **Texte en gras** pour l'emphase
- *Texte en italique* pour une légère emphase
- ~~Texte barré~~ pour le contenu supprimé
- `code en ligne` pour les extraits de code

## Liens et boutons

Vous pouvez créer des [liens normaux](https://exemple.com) ou les styliser comme des boutons :

<a href="https://exemple.com" class="btn">Lien stylisé en bouton</a>

## Titres

### Titre de niveau trois

#### Titre de niveau quatre

##### Titre de niveau cinq

## Citations

> Ceci est une citation. C'est idéal pour mettre en évidence des informations importantes ou des citations provenant d'autres sources.
> 
> Vous pouvez avoir plusieurs paragraphes dans une citation.

## Listes

### Listes non ordonnées

- Élément 1
- Élément 2
  - Élément imbriqué 2.1
  - Élément imbriqué 2.2
- Élément 3

### Listes ordonnées

1. Premier élément
2. Deuxième élément
   1. Élément imbriqué 2.1
   2. Élément imbriqué 2.2
3. Troisième élément

## Blocs de code

<div class="code-filename">exemple.js</div>

```javascript
// Ceci est un bloc de code JavaScript
function saluer(nom) {
  console.log(`Bonjour, ${nom} !`);
  return `Bonjour, ${nom} !`;
}

// Appel de fonction
saluer('Monde');
```

## Tableaux

| Nom      | Âge | Profession        |
|----------|-----|-------------------|
| Jean     | 32  | Ingénieur logiciel |
| Sophie   | 28  | Data Scientist    |
| Michel   | 45  | Chef de projet    |

## Images avec légendes

![Rack de serveurs dans un centre de données](https://placehold.co/800x400/1F2937/FFFFFF?text=Rack+de+Serveurs)

<span class="image-caption">Un rack de serveurs dans notre centre de données à la pointe de la technologie</span>

## Encadrés personnalisés

<div class="callout info">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="callout-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Information
  </div>
  <div class="callout-content">
    Ceci est un encadré d'information. Utilisez-le pour fournir un contexte supplémentaire ou des notes importantes.
  </div>
</div>

<div class="callout warning">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="callout-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
    Avertissement
  </div>
  <div class="callout-content">
    Ceci est un encadré d'avertissement. Utilisez-le pour avertir les utilisateurs de problèmes potentiels ou de considérations importantes.
  </div>
</div>

<div class="callout danger">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="callout-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Danger
  </div>
  <div class="callout-content">
    Ceci est un encadré de danger. Utilisez-le pour mettre en évidence des avertissements critiques ou des actions dangereuses.
  </div>
</div>

<div class="callout success">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="callout-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Succès
  </div>
  <div class="callout-content">
    Ceci est un encadré de succès. Utilisez-le pour mettre en évidence des opérations réussies ou des résultats positifs.
  </div>
</div>

<div class="callout tip">
  <div class="callout-title">
    <svg xmlns="http://www.w3.org/2000/svg" class="callout-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
    Astuce
  </div>
  <div class="callout-content">
    Ceci est un encadré d'astuce. Utilisez-le pour fournir des conseils et des astuces utiles.
  </div>
</div>

## Mise en page à deux colonnes

<div class="two-columns">
  <div>
    <h3>Colonne de gauche</h3>
    <p>Ce contenu apparaît dans la colonne de gauche. Vous pouvez y mettre n'importe quel contenu, y compris des listes, des images, et plus encore.</p>
    <ul>
      <li>Élément 1</li>
      <li>Élément 2</li>
      <li>Élément 3</li>
    </ul>
  </div>
  <div>
    <h3>Colonne de droite</h3>
    <p>Ce contenu apparaît dans la colonne de droite. Les mises en page à deux colonnes sont idéales pour comparer des choses côte à côte.</p>
    <p>Sur les appareils mobiles, ces colonnes s'empileront verticalement pour une meilleure lisibilité.</p>
  </div>
</div>

## Cartes

<div class="card">
  <div class="card-header">
    Titre de la carte
  </div>
  <div class="card-body">
    <p>Ceci est un composant de carte. Vous pouvez l'utiliser pour regrouper du contenu connexe dans un conteneur visuellement distinct.</p>
    <p>Les cartes sont idéales pour mettre en évidence des fonctionnalités ou des informations spécifiques.</p>
  </div>
</div>

## Chronologie

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">Janvier 2025</div>
    <div class="timeline-content">
      <h4>Début du projet</h4>
      <p>Nous avons commencé le développement de notre nouvelle plateforme.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">Février 2025</div>
    <div class="timeline-content">
      <h4>Version Alpha</h4>
      <p>Première version alpha publiée pour les testeurs internes.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">Mars 2025</div>
    <div class="timeline-content">
      <h4>Lancement Beta</h4>
      <p>Version bêta mise à disposition de clients sélectionnés.</p>
    </div>
  </div>
</div>

## Conclusion

Ce guide démontre les riches options de formatage disponibles dans notre système de blog. N'hésitez pas à utiliser ces éléments pour créer un contenu engageant et visuellement attrayant.

---

Pour plus d'informations, contactez notre équipe d'assistance ou consultez notre documentation.