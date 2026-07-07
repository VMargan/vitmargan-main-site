/**
 * Site-wide configuration (non-translatable).
 *
 * Booking: this site is wired for Cal.com (open-source, self-hostable on your
 * Coolify). Set `calLink` to your event handle once your Cal instance is ready;
 * until then the "book a call" buttons gracefully fall back to email.
 */
export const siteConfig = {
  domain: 'vitmargan.be',
  email: 'vincent@vitmargan.be',

  // Cal.com handle — username (shows all event types) or 'username/event-slug'
  calLink: 'vincent-margan-05uj0d',
  // Cal.com cloud, or your self-hosted instance URL (e.g. 'https://cal.vitmargan.be')
  calOrigin: 'https://cal.com',
  // Modal theming
  calBrandColor: '#5b9dfb',

  // Umami analytics (privacy-first, self-hostable on Coolify). Fill BOTH to enable.
  umamiSrc: 'https://analytics.vitmargan.be/script.js',
  umamiWebsiteId: '1082dcc9-2335-455e-99cd-8f6aa677d45f', // website UUID from the Umami dashboard

  // Base URL for large media (the podcasts). Empty = served locally from /public (dev).
  // Point it at your Coolify storage (e.g. 'https://media.vitmargan.be') to keep the repo lean.
  mediaBaseUrl: 'https://media.vitmargan.be/podcasts',
} as const;
