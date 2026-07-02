# vitmargan.be — Site vitrine

Site vitrine one-page de **Vincent Margan**, freelance IT ([Vitmargan SRL](https://vitmargan.be)).
Construit avec **Astro** + **Tailwind CSS v4**, bilingue **FR / EN**, thème **nuit étoilée** (bleu).

## 🏗️ Architecture & flux

```mermaid
flowchart LR
  subgraph Contenu["Contenu (source de vérité)"]
    C["src/i18n/content.ts<br/>textes FR/EN"]
    CFG["src/config.ts<br/>email · Cal.com · réseaux"]
    CL["src/content/changelog/*.md<br/>changelog public"]
  end

  C --> A["Astro + Tailwind"]
  CFG --> A
  CL --> A
  A -->|"npm run build"| D["dist/ (statique)"]
  D -->|"GitHub Actions · deploy.yml"| GP["GitHub Pages"]
  GP -->|"CNAME + DNS"| WWW[["vitmargan.be"]]

  subgraph Release["Release automatique (CI)"]
    GIT["Commits conventionnels"] --> SR["semantic-release"]
    SR --> TECH["CHANGELOG.md (technique)"]
    SR --> GH["GitHub Release (riche)"]
    SR --> PUB["stub changelog public"]
  end
  PUB -.->|"enrichi à la main"| CL
```

## 🧞 Commandes

| Commande            | Action                                          |
| :------------------ | :---------------------------------------------- |
| `npm install`       | Installe les dépendances                        |
| `npm run dev`       | Serveur local sur `localhost:4321`              |
| `npm run build`     | Build de production dans `./dist/`              |
| `npm run preview`   | Prévisualise le build localement                |
| `npm run release:dry` | Simule une release (sans rien publier)        |

## 📁 Structure

```text
src/
├── config.ts               # Config globale (email, Cal.com, réseaux)
├── content.config.ts       # Schéma de la collection "changelog"
├── i18n/content.ts         # 👉 TOUT le contenu FR/EN (source de vérité)
├── layouts/Base.astro      # <head>, SEO/OG, polices, scripts globaux
├── components/             # Header, Hero, Services, Stack, Missions,
│                           #   Projects, About, Contact, Footer, ChangelogView
├── content/changelog/*.md  # Entrées du changelog public (bilingues)
├── styles/global.css       # Design system (tokens, textures, animations)
└── pages/
    ├── index.astro         # FR  →  /
    ├── changelog.astro     # FR  →  /changelog
    └── en/                 # EN  →  /en, /en/changelog
```

## ✏️ Éditer le contenu

- **Textes, missions, projets** : `src/i18n/content.ts` (arbres `fr` et `en` à garder synchro). Les `TODO` sont des placeholders à confirmer.
- **Email / réseaux / réservation** : `src/config.ts`.
- **Couleurs / polices / textures** : bloc `@theme` dans `src/styles/global.css`.
- **Changelog public** : un fichier par version dans `src/content/changelog/`.

## 📅 Réservation (Cal.com)

Le site est câblé pour **Cal.com** (open-source, auto-hébergeable sur Coolify).
Dans `src/config.ts`, renseigner `calLink` (ex. `vincent-margan/30min`) et
éventuellement `calOrigin`. Tant que `calLink` est vide, les boutons basculent
proprement sur un `mailto:`.

## 📊 Analytics (Umami)

Privacy-first, **sans cookies** (pas de bandeau RGPD). Renseigner `umamiSrc` +
`umamiWebsiteId` dans `src/config.ts` — le script ne se charge que si les deux
sont remplis. Instance **Umami auto-hébergée sur Coolify**.

## 🔖 Versioning & changelog

Automatisé via **semantic-release** + **Conventional Commits**. Voir
[`docs/RELEASING.md`](docs/RELEASING.md). Politique : `0.0.1` en baseline, `1.0.0`
réservé à la mise en production.

## 🚀 Déploiement — GitHub Pages (Continuous Delivery)

Le site est **100% statique** → déployé **automatiquement sur GitHub Pages** à
chaque push sur `main` (`.github/workflows/deploy.yml`).

**Setup GitHub (une seule fois) :**
1. **Settings → Pages → Source : GitHub Actions**
2. **Settings → Actions → General → Workflow permissions : Read and write** (pour `release.yml`)
3. **Settings → Pages → Custom domain : `vitmargan.be`** (une fois le DNS live) + **Enforce HTTPS**

**DNS** (chez ton registrar `.be`) pour l'apex `vitmargan.be` :

| Type  | Nom   | Valeur              |
| :---- | :---- | :------------------ |
| A     | `@`   | `185.199.108.153`   |
| A     | `@`   | `185.199.109.153`   |
| A     | `@`   | `185.199.110.153`   |
| A     | `@`   | `185.199.111.153`   |
| CNAME | `www` | `vmargan.github.io.` |

Le fichier `public/CNAME` (→ `vitmargan.be`) est inclus au build.

**Pipeline complet :** PR → `ci.yml` (build) · merge `main` → `release.yml`
(version + changelog + release GitHub) **et** `deploy.yml` (build + déploiement Pages).

> _Alternative :_ le `Dockerfile` (nginx) reste dispo si tu veux héberger sur
> **Coolify**. On garde de toute façon Coolify pour les services dynamiques
> (Cal.com, Umami) sur des sous-domaines (`cal.` / `analytics.vitmargan.be`).
