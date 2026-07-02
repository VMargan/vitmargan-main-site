# Releasing & versioning

Tout est automatisé via **[semantic-release](https://semantic-release.gitbook.io/)**.
Les numéros de version, les tags, le changelog technique et les *releases* GitHub
sont générés à partir des messages de commit — tu n'écris jamais un numéro de version à la main.

## 1. Conventional Commits

Chaque commit suit la convention [Conventional Commits](https://www.conventionalcommits.org).
Le format est **vérifié localement** par un hook `commit-msg` (commitlint + husky).

```
<type>(<scope>): <description courte>

[corps optionnel]

[footer optionnel — ex. "BREAKING CHANGE: ..."]
```

| Type       | Effet sur la version | Section du changelog          |
| :--------- | :------------------- | :---------------------------- |
| `feat`     | **minor** (0.x → 0.y) | ✨ Nouvelles fonctionnalités  |
| `fix`      | **patch**            | 🐛 Corrections                |
| `perf`     | patch                | ⚡ Performances               |
| `refactor` | patch                | ♻️ Refactoring                |
| `docs`     | — (patch si `docs(site)`) | 📝 Documentation         |
| `build`    | patch                | 📦 Build & dépendances        |
| `style` `test` `ci` `chore` | aucune | (masqué)                  |
| `BREAKING CHANGE:` (footer) ou `feat!:` | **major** | 🚨 mis en avant  |

## 2. Politique de version

- **`0.0.1`** = version de départ (site initial). ✅
- On reste volontairement en **`0.x`** pendant toute la phase de construction.
- **`1.0.0`** est réservé au **lancement en production**. On le déclenchera
  intentionnellement avec un commit contenant un footer `BREAKING CHANGE:`
  (ou en préfixant `feat!:`).

> ⚠️ Donc : **pas de `BREAKING CHANGE` avant la prod**, sinon on saute en 1.0.0.

## 3. Les deux changelogs

| Changelog        | Fichier / route                     | Public visé            | Généré par            |
| :--------------- | :---------------------------------- | :--------------------- | :-------------------- |
| **Technique**    | `CHANGELOG.md`                      | développeurs           | 100 % auto (commits)  |
| **Public**       | `src/content/changelog/*.md` → `/changelog` | visiteurs du site | stub auto + rédaction |

À chaque release, un **stub** d'entrée publique est créé automatiquement
(`scripts/new-public-changelog-entry.mjs`). Pour une release qui le mérite, on
**enrichit** ce fichier avec une note lisible et bilingue (c'est le rôle de Claude).

## 4. Comment une release se déroule

1. On pousse des commits conventionnels sur `main`.
2. Le workflow **`.github/workflows/release.yml`** se déclenche.
3. semantic-release :
   - calcule la prochaine version,
   - met à jour `package.json` + `CHANGELOG.md`,
   - crée le stub d'entrée publique,
   - commit le tout (`chore(release): vX.Y.Z [skip ci]`),
   - pose le tag `vX.Y.Z`,
   - publie une **release GitHub riche** (notes sectionnées + emojis).
4. Coolify redéploie automatiquement sur le nouveau commit.

## 5. Prérequis côté GitHub

Aucun secret custom : le workflow utilise le `GITHUB_TOKEN` fourni par Actions.
Vérifier dans **Settings → Actions → General** que *Workflow permissions* est en
**Read and write**.

## 6. Tester en local (sans publier)

```sh
npx semantic-release --dry-run --no-ci
```
