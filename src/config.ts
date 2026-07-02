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
  umamiSrc: '', // e.g. 'https://analytics.vitmargan.be/script.js'
  umamiWebsiteId: '', // website UUID from the Umami dashboard
} as const;
