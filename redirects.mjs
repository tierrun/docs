export const redirects = [
  {
    source: '/',
    destination: '/docs',
    permanent: false,
  },
  {
    source: '/docs/self-hosting/docker',
    destination: 'https://hub.docker.com/u/tierrun',
    permanent: false,
  },
  {
    source: '/docs/self-hosting/fly-io',
    destination: 'https://github.com/gordalina/fly-tier',
    permanent: false,
  },
  {
    source: '/docs/self-hosting/heroku',
    destination: 'https://github.com/tierrun/tier-run-buildpack',
    permanent: false,
  },

  {
    source: '/docs/references/node',
    destination: 'https://www.npmjs.com/package/tier',
    permanent: false,
  },
  {
    source: '/docs/references/go',
    destination: 'https://pkg.go.dev/tier.run/client/tier',
    permanent: false,
  },
  {
    source: '/docs/references/elixir',
    destination: 'https://github.com/gordalina/ex_tier/',
    permanent: false,
  },
  {
    source: '/docs/pricing-json-schema',
    destination:
      'https://raw.githubusercontent.com/tierrun/tier/main/pricing/schema.json',
    permanent: false,
  },
  // Footer
  {
    source: '/priceops',
    destination: 'https://priceops.org/',
    permanent: false,
  },
  {
    source: '/stripe-glossary',
    destination: 'https://github.com/tierrun/tier/wiki/Stripe-Glossary',
    permanent: false,
  },
  {
    source: '/system-status',
    destination: '/',
    permanent: false,
  },
]
