/**
 * Bilingual content for the one-page site.
 *
 * Single source of truth for all copy. The FR and EN trees must stay mirrored.
 * A few personal specifics (LinkedIn URL, exact mission dates) are marked `TODO`
 * and should be confirmed by Vincent.
 *
 * ⚠️ Confidentiality: never reference AI-assistant usage tied to a specific
 * client, and keep the mcp-ado-browser wording neutral (tooling, not "bypass").
 */

export const languages = { fr: 'Français', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Prefix a root-relative path with the locale (FR stays at root). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}

export interface NavItem { href: string; label: string; }
export interface ServiceItem { num: string; title: string; desc: string; tags: string[]; }
export interface StackGroup { label: string; items: string[]; }
export interface Mission {
  client: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}
export interface ProjectItem {
  name: string;
  tag: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  href?: string;
}
export interface Principle { title: string; desc: string; }
export interface Social { label: string; href: string; handle: string; }

export interface SiteContent {
  meta: { title: string; description: string };
  nav: NavItem[];
  langSwitchLabel: string;
  hero: {
    eyebrow: string;
    name: string;
    roles: string[];
    title: string;
    lead: string;
    available: string;
    ctaPrimary: string;
    ctaSecondary: string;
    terminalTitle: string;
    terminal: string[];
  };
  services: { index: string; kicker: string; title: string; intro: string; items: ServiceItem[] };
  stack: { index: string; kicker: string; title: string; intro: string; groups: StackGroup[] };
  missions: {
    index: string; kicker: string; title: string; intro: string;
    current: string; items: Mission[];
  };
  projects: { index: string; kicker: string; title: string; intro: string; items: ProjectItem[]; link: string };
  about: {
    index: string; kicker: string; title: string;
    paragraphs: string[];
    principles: Principle[];
  };
  contact: {
    index: string; kicker: string; title: string; intro: string;
    bookingTitle: string; bookingDesc: string; bookingCta: string;
    orEmail: string; email: string;
    socials: Social[];
  };
  footer: { tagline: string; rights: string; madeWith: string; backToTop: string; changelog: string; legal: string };
  changelog: {
    title: string;
    intro: string;
    back: string;
    kinds: { feature: string; improvement: string; fix: string };
  };
}

export const content: Record<Lang, SiteContent> = {
  fr: {
    meta: {
      title: 'Vincent Margan — Freelance IT · Ingénieur logiciel .NET / Angular',
      description:
        'Freelance IT en Belgique, +10 ans d’expérience. Développeur full-stack .NET / Angular, cloud Azure, DevOps & leadership technique. Du concept à la production.',
    },
    nav: [
      { href: '#services', label: 'Services' },
      { href: '#stack', label: 'Expertise' },
      { href: '#missions', label: 'Missions' },
      { href: '#projects', label: 'Projets' },
      { href: '#about', label: 'À propos' },
      { href: '#contact', label: 'Contact' },
    ],
    langSwitchLabel: 'EN',
    hero: {
      eyebrow: 'Freelance IT · Belgique · Disponible',
      name: 'Vincent Margan',
      roles: ['Ingénieur logiciel', 'Tech Lead .NET', 'Développeur full-stack', 'Architecte de solutions'],
      title: 'Je conçois et développe des produits logiciels solides, du concept à la production.',
      lead:
        'Freelance avec plus de dix ans d’expérience, je couvre toute la chaîne technique — full-stack .NET / Angular, cloud Azure, DevOps et architecture — sur des environnements exigeants, du secteur public à la fintech.',
      available: 'Disponible pour de nouvelles missions',
      ctaPrimary: 'Réserver un échange',
      ctaSecondary: 'Voir mon expertise',
      terminalTitle: 'vincent@vitmargan',
      terminal: [
        '$ whoami',
        'Vincent Margan — software engineer · freelance',
        '$ cat stack.txt',
        '.NET · C# · Angular · Azure · DevOps · IA',
        '$ ./status --availability',
        '→ prêt à construire votre prochain produit',
      ],
    },
    services: {
      index: '01',
      kicker: 'Ce que je fais',
      title: 'Du cadrage à la mise en production, sans zone d’ombre.',
      intro:
        'Une palette large qui me permet de porter un projet de bout en bout, ou de renforcer une équipe sur un point précis — code, cloud, qualité ou architecture.',
      items: [
        {
          num: '01',
          title: 'Développement full-stack',
          desc:
            'Applications web performantes et maintenables en .NET / C# et Angular, de l’interface utilisateur à l’API et à la base de données. Clean Architecture, DDD, CQRS.',
          tags: ['.NET', 'Angular', 'C#', 'TypeScript'],
        },
        {
          num: '02',
          title: 'DevOps, Cloud & CI/CD',
          desc:
            'Infrastructure cloud Azure, conteneurisation et pipelines de déploiement entièrement automatisés — pour livrer vite, souvent et en confiance.',
          tags: ['Azure', 'Docker', 'Kubernetes', 'CI/CD'],
        },
        {
          num: '03',
          title: 'Architecture & leadership technique',
          desc:
            'Architecture applicative et d’intégration, définition de standards, coaching de développeurs et rôle de référent entre les équipes.',
          tags: ['Architecture', 'Tech lead', 'Coaching', 'Standards'],
        },
        {
          num: '04',
          title: 'Qualité & tests automatisés',
          desc:
            'Culture DevOps et shift-left testing : tests automatisés (unitaires, e2e Playwright), gating et non-régression intégrés au pipeline.',
          tags: ['Playwright', 'Tests e2e', 'xUnit', 'Shift-left'],
        },
      ],
    },
    stack: {
      index: '02',
      kicker: 'Ma boîte à outils',
      title: 'Une expertise technique large et à jour.',
      intro:
        'Les technologies que j’utilise au quotidien. Polyvalent par choix : je m’adapte à votre contexte plutôt que d’imposer une stack.',
      groups: [
        { label: 'Langages & Backend', items: ['C#', '.NET / ASP.NET Core', 'EF Core', 'Clean Architecture', 'DDD', 'CQRS / MediatR', 'RabbitMQ'] },
        { label: 'Frontend', items: ['Angular', 'Signals', 'RxJS', 'NgRx', 'React / Next.js', 'Astro', 'TypeScript', 'Tailwind'] },
        { label: 'Cloud & DevOps', items: ['Azure', 'Docker', 'Kubernetes', 'Azure DevOps', 'GitHub Actions', 'Coolify', 'CI/CD'] },
        { label: 'Bases de données', items: ['SQL Server', 'Azure SQL', 'PostgreSQL', 'Oracle', 'MySQL'] },
        { label: 'Qualité & IA', items: ['Playwright', 'xUnit', 'Shift-left testing', 'Dév. assisté par IA', 'MCP'] },
      ],
    },
    missions: {
      index: '03',
      kicker: 'Parcours',
      title: 'Des missions concrètes, des contextes exigeants.',
      intro:
        'Plus de dix ans d’expérience, du développement full-stack au leadership technique — secteur public, fintech, industrie, pharma.',
      current: 'En cours',
      items: [
        {
          client: 'UCB',
          role: 'Software Developer',
          period: '2026 — aujourd’hui',
          current: true,
          summary:
            'Développeur full-stack sur une plateforme interne d’évaluation des risques et de gestion des protocoles d’études cliniques, en environnement pharmaceutique réglementé (GxP).',
          highlights: [
            'Développement de modules métier sur une plateforme SaaS interne déployée sur Azure.',
            'Front Angular 21 (signals, composants standalone) et back .NET 9 en Clean Architecture.',
            'Intégration de services Azure : Cognitive Search, Service Bus, Key Vault, génération de livrables.',
          ],
          stack: ['Angular 21', '.NET 9', 'Azure', 'EF Core', 'TypeScript'],
        },
        {
          client: 'Pluxee (Sodexo)',
          role: 'Tech Lead .NET / Chapter Lead',
          period: '2023 — 2026',
          summary:
            'Tech lead sur la galaxie d’applications Titres-Services et chèques (secteur public & fintech) : BFF, APIs et intégrations à fort volume.',
          highlights: [
            'Conception et développement from scratch de la nouvelle Worker API, en remplacement d’un système legacy.',
            'Acteur clé du « carve-out » Sodexo → Pluxee : migration multi-tenant Azure et datacenter, pipelines CI/CD, authentification (IdentityServer).',
            'Coaching technique de 7 développeurs, définition des standards et diagrammes d’architecture d’intégration.',
            'Impulsion d’une culture DevOps et de tests automatisés (shift-left, e2e Playwright).',
          ],
          stack: ['.NET', 'ASP.NET Core', 'Oracle', 'IdentityServer', 'Azure', 'Playwright'],
        },
        {
          client: 'SPF Affaires étrangères',
          role: 'Solution Architect',
          period: '2022 — 2023',
          summary:
            'Architecte de solutions sur les nouvelles applications Visa & Passeport, référent central entre les équipes Dev, Infra, Réseau et Sécurité.',
          highlights: [
            'Conception des modules « signal persons », biométrie et signature de visa via HSM.',
            'Applications .NET Core / Angular sécurisées, clés protégées par Azure Key Vault (HSM).',
          ],
          stack: ['.NET Core', 'Angular', 'Azure', 'Key Vault (HSM)', 'Azure DevOps'],
        },
        {
          client: 'Winamp',
          role: 'Technical Leader',
          period: '2021 — 2022',
          summary:
            'Tech lead d’une équipe de 4 développeurs sur la relance du lecteur Winamp légendaire, en architecture micro-services.',
          highlights: [
            'Nouveau backend de l’écosystème Winamp en micro-services.',
            'Messagerie asynchrone (MassTransit / RabbitMQ) et déploiement sur Kubernetes (AKS).',
          ],
          stack: ['.NET Core', 'MassTransit', 'RabbitMQ', 'PostgreSQL', 'Angular', 'AKS'],
        },
        {
          client: 'RingRing',
          role: 'Senior Software Engineer',
          period: '2020 — 2021',
          summary:
            'Développeur senior dans l’équipe produit, sur l’ensemble de la chaîne — du front Angular au back .NET en micro-services.',
          highlights: [
            'Nouveau portail de gestion des produits, back-office et design system Angular.',
            'Architecture micro-services (IdentityServer, RabbitMQ).',
          ],
          stack: ['Angular', '.NET Core', 'IdentityServer', 'RabbitMQ', 'MySQL'],
        },
        {
          client: 'Pulsar Consulting',
          role: 'Full-Stack Developer / Tech Lead',
          period: '2015 — 2020',
          summary:
            'Développeur full-stack et tech lead sur de nombreux projets industriels (plateforme eLisa pour Total, ArcelorMittal, Yara… à travers l’Europe), et membre de l’équipe IT-Infra.',
          highlights: [
            'Sites de prise de rendez-vous, kiosques d’enregistrement, interfaces de pesage et back-offices.',
            'Administration de l’infrastructure interne (Active Directory, TFS, Office 365, Exchange, SharePoint).',
          ],
          stack: ['Angular', '.NET', 'WCF', 'SQL Server', 'Oracle'],
        },
      ],
    },
    projects: {
      index: '04',
      kicker: 'En dehors des missions',
      title: 'Des projets que je mène de A à Z.',
      intro:
        'Quand j’explore, je livre pour de vrai — souvent sur des technologies neuves, en développement assisté par IA, du code jusqu’à l’infrastructure.',
      link: 'Voir le projet',
      items: [
        {
          name: 'Bureau spatial AR (XREAL)',
          tag: 'R&D · Réalité augmentée',
          period: 'En cours',
          summary:
            'Bureau spatial en réalité augmentée pour lunettes XREAL One Pro sur smartphone Android non-rooté — un environnement type SteamVR avec fenêtres web flottantes à 360°, dock et suivi de tête.',
          highlights: [
            'Rétro-ingénierie du SDK propriétaire (binaires natifs, désassemblage ARM64) pour piloter les lunettes hors de leur runtime officiel, dans un cadre légal d’interopérabilité.',
            'Head-tracking 3DoF reconstruit depuis l’API IMU brute en C++ natif (NDK/JNI) : filtre AHRS, fusion magnétomètre anti-dérive, One Euro filter.',
            'Moteur de rendu 3D stéréoscopique maison (projection pinhole, disparité inter-oculaire) et pilote d’affichage stéréo (SBS).',
          ],
          stack: ['Android / Kotlin', 'C++ (NDK/JNI)', 'Reverse engineering', 'IMU / signal', 'Rendu 3D'],
        },
        {
          name: 'Mirage’s',
          tag: 'Bénévolat · Communauté',
          period: 'En cours',
          summary:
            'Écosystème full-stack pour une communauté gaming Discord : un site web public et un back-office de gestion des events et des membres.',
          highlights: [
            'Site communautaire Next.js 16 / React 19 (Prisma, PostgreSQL, Auth0 via Discord, stockage S3 auto-hébergé).',
            'Back-office ASP.NET Core 9 (Clean Architecture, CQRS) avec front Angular 21 et bots Discord temps réel.',
            'CI/CD complète GitHub Actions : versioning automatique, images Docker, déploiement continu sur Coolify, observabilité.',
          ],
          stack: ['Next.js 16', '.NET 9', 'Angular 21', 'PostgreSQL', 'Coolify', 'GitHub Actions'],
        },
        {
          name: 'mcp-ado-browser',
          tag: 'Open source · MCP',
          period: '2026',
          summary:
            'Serveur MCP (stdio) qui donne à un assistant IA un accès en lecture seule à Azure DevOps via la session navigateur existante — une alternative pragmatique quand les MCP classiques (Azure CLI, MCP ADO officiel) sont indisponibles ou bloqués.',
          highlights: [
            'Fonctionne sans jeton d’accès personnel (PAT) ni CLI — utile quand les intégrations standard échouent.',
            'Accède aux work items, dépôts et artifacts via Playwright et un profil navigateur isolé.',
          ],
          stack: ['TypeScript', 'MCP', 'Playwright', 'Node.js'],
          href: 'https://github.com/VMargan/mcp-ado-browser',
        },
      ],
    },
    about: {
      index: '05',
      kicker: 'À propos',
      title: 'Un partenaire technique, pas juste une paire de bras.',
      paragraphs: [
        'Je suis Vincent Margan, ingénieur logiciel freelance basé en Belgique, avec plus de dix ans d’expérience sur des environnements exigeants — du secteur public à la fintech, en passant par l’industrie et la pharma. Développeur full-stack .NET / Angular, j’interviens autant sur le code que sur l’architecture, le cloud et les pipelines de déploiement.',
        'Au fil des missions, j’ai porté des rôles de tech lead, d’architecte de solutions et de coach technique. J’aime comprendre le « pourquoi » avant le « comment » : un bon logiciel, c’est une réponse claire à un besoin réel, livrée proprement et pensée pour durer.',
        'Je fais aussi partie de ceux qui embrassent pleinement le développement assisté par IA — workflows agentiques, MCP, montée en abstraction — pour livrer plus vite sans rien sacrifier à la qualité, dans un écosystème que je suis de près.',
      ],
      principles: [
        { title: 'Qualité durable', desc: 'Un code lisible, testé et documenté que votre équipe pourra reprendre sans douleur.' },
        { title: 'Automatisation avant tout', desc: 'CI/CD, tests automatisés et shift-left : livrer vite, souvent et en confiance.' },
        { title: 'Communication claire', desc: 'Des points réguliers, des décisions expliquées, zéro effet tunnel.' },
        { title: 'Toujours en veille', desc: 'IA, nouveaux outils, montée en compétences continue pour vous apporter le bon levier.' },
      ],
    },
    contact: {
      index: '06',
      kicker: 'Contact',
      title: 'Travaillons ensemble.',
      intro:
        'Un projet, une mission, ou simplement une question ? Le plus simple : réservez directement un créneau pour un premier échange.',
      bookingTitle: 'Réserver un échange',
      bookingDesc: 'Choisissez un créneau qui vous convient — 30 minutes pour discuter de votre besoin.',
      bookingCta: 'Voir mes disponibilités',
      orEmail: 'Ou par email',
      email: 'vincent@vitmargan.be',
      socials: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vincent-margan/', handle: 'in/vincent-margan' },
        { label: 'GitHub', href: 'https://github.com/VMargan', handle: '@VMargan' },
      ],
    },
    footer: {
      tagline: 'Ingénieur logiciel freelance — disponible pour vos projets.',
      rights: 'Tous droits réservés.',
      madeWith: 'Conçu & développé avec Astro',
      backToTop: 'Haut de page',
      changelog: 'Journal',
      legal: 'Vitmargan SRL · TVA BE 0804.761.983 · Grimbergen',
    },
    changelog: {
      title: 'Journal des mises à jour',
      intro: 'L’évolution de ce site, version après version.',
      back: 'Retour au site',
      kinds: { feature: 'Nouveauté', improvement: 'Amélioration', fix: 'Correction' },
    },
  },

  en: {
    meta: {
      title: 'Vincent Margan — Freelance IT · .NET / Angular Software Engineer',
      description:
        'Freelance IT in Belgium, 10+ years of experience. Full-stack .NET / Angular developer, Azure cloud, DevOps & technical leadership. From concept to production.',
    },
    nav: [
      { href: '#services', label: 'Services' },
      { href: '#stack', label: 'Expertise' },
      { href: '#missions', label: 'Work' },
      { href: '#projects', label: 'Projects' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    langSwitchLabel: 'FR',
    hero: {
      eyebrow: 'Freelance IT · Belgium · Available',
      name: 'Vincent Margan',
      roles: ['Software Engineer', '.NET Tech Lead', 'Full-stack Developer', 'Solution Architect'],
      title: 'I design and build solid software products, from concept to production.',
      lead:
        'A freelancer with 10+ years of experience, I cover the whole technical chain — full-stack .NET / Angular, Azure cloud, DevOps and architecture — across demanding environments, from public sector to fintech.',
      available: 'Available for new engagements',
      ctaPrimary: 'Book a call',
      ctaSecondary: 'See my expertise',
      terminalTitle: 'vincent@vitmargan',
      terminal: [
        '$ whoami',
        'Vincent Margan — software engineer · freelance',
        '$ cat stack.txt',
        '.NET · C# · Angular · Azure · DevOps · AI',
        '$ ./status --availability',
        '→ ready to build your next product',
      ],
    },
    services: {
      index: '01',
      kicker: 'What I do',
      title: 'From scoping to production, no blind spots.',
      intro:
        'A broad skill set that lets me own a project end to end, or reinforce a team on a specific need — code, cloud, quality or architecture.',
      items: [
        {
          num: '01',
          title: 'Full-stack development',
          desc:
            'Performant, maintainable web applications in .NET / C# and Angular — from the UI to the API and the database. Clean Architecture, DDD, CQRS.',
          tags: ['.NET', 'Angular', 'C#', 'TypeScript'],
        },
        {
          num: '02',
          title: 'DevOps, Cloud & CI/CD',
          desc:
            'Azure cloud infrastructure, containerisation and fully automated deployment pipelines — to ship fast, often and with confidence.',
          tags: ['Azure', 'Docker', 'Kubernetes', 'CI/CD'],
        },
        {
          num: '03',
          title: 'Architecture & technical leadership',
          desc:
            'Application and integration architecture, standards definition, developer coaching, and acting as the reference point across teams.',
          tags: ['Architecture', 'Tech lead', 'Coaching', 'Standards'],
        },
        {
          num: '04',
          title: 'Quality & test automation',
          desc:
            'A DevOps and shift-left testing culture: automated tests (unit, Playwright e2e), gating and non-regression built into the pipeline.',
          tags: ['Playwright', 'E2E tests', 'xUnit', 'Shift-left'],
        },
      ],
    },
    stack: {
      index: '02',
      kicker: 'My toolbox',
      title: 'Broad, up-to-date technical expertise.',
      intro:
        'The technologies I work with daily. Versatile by design: I adapt to your context rather than impose a stack.',
      groups: [
        { label: 'Languages & Backend', items: ['C#', '.NET / ASP.NET Core', 'EF Core', 'Clean Architecture', 'DDD', 'CQRS / MediatR', 'RabbitMQ'] },
        { label: 'Frontend', items: ['Angular', 'Signals', 'RxJS', 'NgRx', 'React / Next.js', 'Astro', 'TypeScript', 'Tailwind'] },
        { label: 'Cloud & DevOps', items: ['Azure', 'Docker', 'Kubernetes', 'Azure DevOps', 'GitHub Actions', 'Coolify', 'CI/CD'] },
        { label: 'Databases', items: ['SQL Server', 'Azure SQL', 'PostgreSQL', 'Oracle', 'MySQL'] },
        { label: 'Quality & AI', items: ['Playwright', 'xUnit', 'Shift-left testing', 'AI-assisted dev', 'MCP'] },
      ],
    },
    missions: {
      index: '03',
      kicker: 'Experience',
      title: 'Real missions, demanding environments.',
      intro:
        '10+ years of experience, from full-stack development to technical leadership — public sector, fintech, industry, pharma.',
      current: 'Ongoing',
      items: [
        {
          client: 'UCB',
          role: 'Software Developer',
          period: '2026 — present',
          current: true,
          summary:
            'Full-stack developer on an internal risk-assessment and clinical-trial protocol management platform, in a regulated pharmaceutical environment (GxP).',
          highlights: [
            'Building business modules on an internal SaaS platform deployed on Azure.',
            'Angular 21 front (signals, standalone components) and .NET 9 back in Clean Architecture.',
            'Integration of Azure services: Cognitive Search, Service Bus, Key Vault, document generation.',
          ],
          stack: ['Angular 21', '.NET 9', 'Azure', 'EF Core', 'TypeScript'],
        },
        {
          client: 'Pluxee (Sodexo)',
          role: '.NET Tech Lead / Chapter Lead',
          period: '2023 — 2026',
          summary:
            'Tech lead on the Titres-Services and vouchers application galaxy (public sector & fintech): BFFs, APIs and high-volume integrations.',
          highlights: [
            'Designed and built the new Worker API from scratch, replacing a legacy system.',
            'Key player in the Sodexo → Pluxee carve-out: multi-tenant Azure and datacenter migration, CI/CD pipelines, authentication (IdentityServer).',
            'Technical coaching of 7 developers, standards definition and integration architecture diagrams.',
            'Drove a DevOps and automated-testing culture (shift-left, Playwright e2e).',
          ],
          stack: ['.NET', 'ASP.NET Core', 'Oracle', 'IdentityServer', 'Azure', 'Playwright'],
        },
        {
          client: 'SPF Foreign Affairs',
          role: 'Solution Architect',
          period: '2022 — 2023',
          summary:
            'Solution architect on the new Visa & Passport applications, acting as the central reference between the Dev, Infra, Network and Security teams.',
          highlights: [
            'Designed the "signal persons", biometrics and HSM visa-signing modules.',
            'Secure .NET Core / Angular applications, keys protected by Azure Key Vault (HSM).',
          ],
          stack: ['.NET Core', 'Angular', 'Azure', 'Key Vault (HSM)', 'Azure DevOps'],
        },
        {
          client: 'Winamp',
          role: 'Technical Leader',
          period: '2021 — 2022',
          summary:
            'Tech lead of a 4-developer team on the relaunch of the legendary Winamp player, in a micro-service architecture.',
          highlights: [
            'New backend for the Winamp ecosystem in micro-services.',
            'Asynchronous messaging (MassTransit / RabbitMQ) and Kubernetes (AKS) deployment.',
          ],
          stack: ['.NET Core', 'MassTransit', 'RabbitMQ', 'PostgreSQL', 'Angular', 'AKS'],
        },
        {
          client: 'RingRing',
          role: 'Senior Software Engineer',
          period: '2020 — 2021',
          summary:
            'Senior developer in the product team, across the whole chain — from the Angular front to the .NET micro-service back.',
          highlights: [
            'New product management portal, back-office and Angular design system.',
            'Micro-service architecture (IdentityServer, RabbitMQ).',
          ],
          stack: ['Angular', '.NET Core', 'IdentityServer', 'RabbitMQ', 'MySQL'],
        },
        {
          client: 'Pulsar Consulting',
          role: 'Full-Stack Developer / Tech Lead',
          period: '2015 — 2020',
          summary:
            'Full-stack developer and tech lead on many industrial projects (the eLisa platform for Total, ArcelorMittal, Yara… across Europe), and member of the IT-Infra team.',
          highlights: [
            'Appointment websites, registration kiosks, weighing interfaces and back-offices.',
            'Administration of the internal infrastructure (Active Directory, TFS, Office 365, Exchange, SharePoint).',
          ],
          stack: ['Angular', '.NET', 'WCF', 'SQL Server', 'Oracle'],
        },
      ],
    },
    projects: {
      index: '04',
      kicker: 'Beyond client work',
      title: 'Projects I own end to end.',
      intro:
        'When I explore, I actually ship — often on brand-new technologies, with AI-assisted development, from code all the way to infrastructure.',
      link: 'View project',
      items: [
        {
          name: 'AR Spatial Desktop (XREAL)',
          tag: 'R&D · Augmented reality',
          period: 'Ongoing',
          summary:
            'A spatial augmented-reality desktop for XREAL One Pro glasses on a non-rooted Android phone — a SteamVR-like environment with floating 360° web windows, a dock and head tracking.',
          highlights: [
            'Reverse-engineered the proprietary SDK (native binaries, ARM64 disassembly) to drive the glasses outside their official runtime, within a legal interoperability framework.',
            '3DoF head tracking rebuilt from the raw IMU API in native C++ (NDK/JNI): AHRS complementary filter, anti-drift magnetometer fusion, One Euro filter.',
            'Custom stereoscopic 3D rendering engine (pinhole projection, inter-ocular disparity) and a stereo (SBS) display driver.',
          ],
          stack: ['Android / Kotlin', 'C++ (NDK/JNI)', 'Reverse engineering', 'IMU / signal', '3D rendering'],
        },
        {
          name: 'Mirage’s',
          tag: 'Volunteer · Community',
          period: 'Ongoing',
          summary:
            'A full-stack ecosystem for a Discord gaming community: a public website and a back-office to manage events and members.',
          highlights: [
            'Community website in Next.js 16 / React 19 (Prisma, PostgreSQL, Auth0 via Discord, self-hosted S3 storage).',
            'ASP.NET Core 9 back-office (Clean Architecture, CQRS) with an Angular 21 front and real-time Discord bots.',
            'Full GitHub Actions CI/CD: automated versioning, Docker images, continuous deployment to Coolify, observability.',
          ],
          stack: ['Next.js 16', '.NET 9', 'Angular 21', 'PostgreSQL', 'Coolify', 'GitHub Actions'],
        },
        {
          name: 'mcp-ado-browser',
          tag: 'Open source · MCP',
          period: '2026',
          summary:
            'An MCP (stdio) server that gives an AI assistant read-only access to Azure DevOps through the existing browser session — a pragmatic fallback when the classic MCPs (Azure CLI, official ADO MCP) are unavailable or blocked.',
          highlights: [
            'Works without a personal access token (PAT) or CLI — handy when standard integrations fail.',
            'Reaches work items, repositories and artifacts via Playwright and an isolated browser profile.',
          ],
          stack: ['TypeScript', 'MCP', 'Playwright', 'Node.js'],
          href: 'https://github.com/VMargan/mcp-ado-browser',
        },
      ],
    },
    about: {
      index: '05',
      kicker: 'About',
      title: 'A technical partner, not just an extra pair of hands.',
      paragraphs: [
        'I am Vincent Margan, a freelance software engineer based in Belgium, with 10+ years of experience across demanding environments — from public sector to fintech, industry and pharma. As a full-stack .NET / Angular developer, I work as much on the code as on the architecture, the cloud and the deployment pipelines.',
        'Across missions I have taken on tech lead, solution architect and technical coach roles. I like to understand the "why" before the "how": good software is not just code that works, it is a clear answer to a real need, delivered cleanly and built to last.',
        'I am also among those who fully embrace AI-assisted development — agentic workflows, MCP, working at a higher level of abstraction — to ship faster without sacrificing quality, in an ecosystem I follow closely.',
      ],
      principles: [
        { title: 'Lasting quality', desc: 'Readable, tested, documented code your team can take over painlessly.' },
        { title: 'Automation first', desc: 'CI/CD, automated tests and shift-left: ship fast, often and with confidence.' },
        { title: 'Clear communication', desc: 'Regular check-ins, explained decisions, zero tunnel effect.' },
        { title: 'Always learning', desc: 'AI, new tools, continuous upskilling to bring you the right leverage.' },
      ],
    },
    contact: {
      index: '06',
      kicker: 'Contact',
      title: 'Let’s work together.',
      intro:
        'A project, a mission, or just a question? The easiest way: book a slot directly for a first conversation.',
      bookingTitle: 'Book a call',
      bookingDesc: 'Pick a time that suits you — 30 minutes to talk through your needs.',
      bookingCta: 'See my availability',
      orEmail: 'Or by email',
      email: 'vincent@vitmargan.be',
      socials: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vincent-margan/', handle: 'in/vincent-margan' },
        { label: 'GitHub', href: 'https://github.com/VMargan', handle: '@VMargan' },
      ],
    },
    footer: {
      tagline: 'Freelance software engineer — available for your projects.',
      rights: 'All rights reserved.',
      madeWith: 'Designed & built with Astro',
      backToTop: 'Back to top',
      changelog: 'Changelog',
      legal: 'Vitmargan SRL · VAT BE 0804.761.983 · Grimbergen',
    },
    changelog: {
      title: 'Changelog',
      intro: 'How this site evolves, version by version.',
      back: 'Back to site',
      kinds: { feature: 'New', improvement: 'Improvement', fix: 'Fix' },
    },
  },
};

/**
 * Concrete projects / realisations per mission, keyed by `mission.client`.
 * Shown in the "expand" on each mission card (progressive disclosure).
 * UCB kept at normal (non-sensitive) detail; no internal product name.
 */
export const missionProjects: Record<Lang, Record<string, string[]>> = {
  fr: {
    'UCB': [
      'Développement full-stack de modules métier (conception d’étude, registre des risques, plan d’audit, adverse events…).',
      'Front Angular 21 (signals, standalone) et back .NET 9 en Clean Architecture.',
      'Intégrations Azure : Cognitive Search, Service Bus, Key Vault ; génération de livrables Word ; audit trail GxP.',
    ],
    'Pluxee (Sodexo)': [
      'Carve-out Sodexo → Pluxee : migration multi-tenant Azure et datacenter, pipelines CI/CD, IdentityServer.',
      'WAPI — nouvelle Worker API développée de zéro pour remplacer la Viper API legacy.',
      'Galaxie Titres-Services : 3 BFF (Customer, Worker, Provider) + 3 APIs services au-dessus de la base Oracle « Viper ».',
      'PAPI — API d’intégration prestataires (authentification JWKS) et intégrations bancaires (ViperAPI).',
      'Domaine consumer : backend de l’ancienne app mobile + OrderMailScript (console .NET parsant les commandes par email).',
      'Coaching de 7 développeurs, standards, diagrammes d’architecture d’intégration, tests e2e (Playwright).',
    ],
    'SPF Affaires étrangères': [
      'Module « signal persons » : référentiel des personnes signalées (criminels, terroristes…).',
      'Module biométrie : capture portrait, empreintes et signature.',
      'API de signature de visa via HSM (clé privée centralisée protégée par Azure Key Vault).',
    ],
    'Winamp': [
      'Nouveau backend de l’écosystème Winamp en micro-services.',
      'Messagerie asynchrone MassTransit / RabbitMQ, PostgreSQL, déploiement AKS.',
    ],
    'RingRing': [
      'Nouveau portail de gestion des produits RingRing.',
      'Outil de back-office / administration interne.',
      'Design system Angular (librairie de composants basée sur Nebular).',
      'Micro-service de traduction (Clean Architecture).',
    ],
    'Pulsar Consulting': [
      'Plateforme eLisa pour sites industriels : Total, ArcelorMittal, Yara (prise de RDV, appel camion, kiosques d’enregistrement et de pesage, back-offices).',
      'Déploiements multi-pays (FR, DE, IT, BE) sur une dizaine de sites.',
      'Équipe IT-Infra : Active Directory, TFS, Office 365, Exchange, SharePoint.',
    ],
  },
  en: {
    'UCB': [
      'Full-stack development of business modules (study design, risk register, audit plan, adverse events…).',
      'Angular 21 front (signals, standalone) and .NET 9 back in Clean Architecture.',
      'Azure integrations: Cognitive Search, Service Bus, Key Vault; Word deliverable generation; GxP audit trail.',
    ],
    'Pluxee (Sodexo)': [
      'Sodexo → Pluxee carve-out: multi-tenant Azure and datacenter migration, CI/CD pipelines, IdentityServer.',
      'WAPI — a new Worker API built from scratch to replace the legacy Viper API.',
      'Titres-Services galaxy: 3 BFFs (Customer, Worker, Provider) + 3 service APIs over the Oracle “Viper” database.',
      'PAPI — provider integration API (JWKS auth) and bank integrations (ViperAPI).',
      'Consumer domain: former mobile app backend + OrderMailScript (.NET console parsing voucher orders from emails).',
      'Coaching of 7 developers, standards, integration architecture diagrams, e2e tests (Playwright).',
    ],
    'SPF Foreign Affairs': [
      '“Signal persons” module: registry of flagged individuals (criminals, terrorists…).',
      'Biometrics module: portrait, fingerprint and signature capture.',
      'Visa signing API via HSM (centralized private key protected by Azure Key Vault).',
    ],
    'Winamp': [
      'New backend for the Winamp ecosystem in micro-services.',
      'Asynchronous messaging MassTransit / RabbitMQ, PostgreSQL, AKS deployment.',
    ],
    'RingRing': [
      'New RingRing product management portal.',
      'Internal back-office / administration tool.',
      'Angular design system (Nebular-based component library).',
      'Translation micro-service (Clean Architecture).',
    ],
    'Pulsar Consulting': [
      'eLisa platform for industrial sites: Total, ArcelorMittal, Yara (appointment booking, truck-call, registration and weighing kiosks, back-offices).',
      'Multi-country deployments (FR, DE, IT, BE) across ~a dozen sites.',
      'IT-Infra team: Active Directory, TFS, Office 365, Exchange, SharePoint.',
    ],
  },
};
