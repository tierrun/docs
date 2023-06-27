export const redirects = [
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
    destination: 'https://tier.betteruptime.com/',
    permanent: false,
  },
  // Redirects mapping old links
  {
    source: '/docs/index',
    destination: '/docs',
    permanent: false,
  },
  {
    source: '/docs/index/index.html',
    destination: '/docs',
    permanent: false,
  },
  {
    source: '/docs/index.html',
    destination: '/docs',
    permanent: false,
  },
  {
    source: '/docs/recipes/index.html',
    destination: '/docs/recipes',
    permanent: false,
  },
  {
    source: '/docs/integrations',
    destination:
      '/docs/quickstarts/initiate-subscription#1-initialize-tier-sdk',
    permanent: false,
  },
  {
    source: '/docs/integrations/index.html',
    destination:
      '/docs/quickstarts/initiate-subscription#1-initialize-tier-sdk',
    permanent: false,
  },
  {
    source: '/docs/quickstart',
    destination: '/docs#quickstarts',
    permanent: false,
  },
  {
    source: '/docs/cli',
    destination: '/docs/references/tier-cli',
    permanent: false,
  },
  {
    source: '/docs/cli/index.html',
    destination: '/docs/references/tier-cli',
    permanent: false,
  },
  {
    source: '/docs/sdk',
    destination: '/docs#explore-references',
    permanent: false,
  },
  {
    source: '/docs/sdk/index.html',
    destination: '/docs#explore-references',
    permanent: false,
  },
  {
    source: '/docs/mapping',
    destination: '/docs/miscellaneous/stripe-mapping',
    permanent: false,
  },
  {
    source: '/docs/mapping/index.html',
    destination: '/docs/miscellaneous/stripe-mapping',
    permanent: false,
  },
  {
    source: '/blog/the-5-gotchas-of-stripes-test-mode',
    destination: '/blog/the-5-gotchas-of-stripe-test-mode',
    permanent: false,
  },
  // Pricing JSON
  {
    source: '/pricing-json-schema',
    destination:
      'https://raw.githubusercontent.com/tierrun/tier/main/pricing/schema.json',
    permanent: false,
  },
  {
    source: '/docs/pricing.json.schema',
    destination:
      'https://raw.githubusercontent.com/tierrun/tier/main/pricing/schema.json',
    permanent: false,
  },
  {
    source: '/docs/pricing.schema.json',
    destination:
      'https://raw.githubusercontent.com/tierrun/tier/main/pricing/schema.json',
    permanent: false,
  },
  {
    source: '/docs/pricing.json',
    destination: '/docs/pricing-json',
    permanent: false,
  },
  {
    source: '/docs/pricing.json/index.html',
    destination: '/docs/pricing-json',
    permanent: false,
  },
  // CLI Old Documentation remapping
  {
    source: '/docs/install',
    destination: '/docs/references/tier-cli#installing-tier-cli',
    permanent: false,
  },
  {
    source: '/docs/install/index.html',
    destination: '/docs/references/tier-cli#installing-tier-cli',
    permanent: false,
  },
  {
    source: '/docs/cli/whois',
    destination: '/docs/references/tier-cli#tier-whois',
    permanent: false,
  },
  {
    source: '/docs/cli/whois/index.html',
    destination: '/docs/references/tier-cli#tier-whois',
    permanent: false,
  },
  {
    source: '/docs/cli/whoami',
    destination: '/docs/references/tier-cli#tier-whoami',
    permanent: false,
  },
  {
    source: '/docs/cli/whoami/index.html',
    destination: '/docs/references/tier-cli#tier-whoami',
    permanent: false,
  },
  {
    source: '/docs/cli/phases',
    destination: '/docs/references/tier-cli#tier-phases',
    permanent: false,
  },
  {
    source: '/docs/cli/phases/index.html',
    destination: '/docs/references/tier-cli#tier-phases',
    permanent: false,
  },
  {
    source: '/docs/cli/report',
    destination: '/docs/references/tier-cli#tier-report',
    permanent: false,
  },
  {
    source: '/docs/cli/report/index.html',
    destination: '/docs/references/tier-cli#tier-report',
    permanent: false,
  },
  {
    source: '/docs/cli/push',
    destination: '/docs/references/tier-cli#tier-push',
    permanent: false,
  },
  {
    source: '/docs/cli/push/index.html',
    destination: '/docs/references/tier-cli#tier-push',
    permanent: false,
  },
  {
    source: '/docs/cli/clean',
    destination: '/docs/references/tier-cli#tier-clean',
    permanent: false,
  },
  {
    source: '/docs/cli/clean/index.html',
    destination: '/docs/references/tier-cli#tier-clean',
    permanent: false,
  },
  {
    source: '/docs/cli/version',
    destination: '/docs/references/tier-cli#tier-version',
    permanent: false,
  },
  {
    source: '/docs/cli/version/index.html',
    destination: '/docs/references/tier-cli#tier-version',
    permanent: false,
  },
  {
    source: '/docs/cli/pull',
    destination: '/docs/references/tier-cli#tier-pull',
    permanent: false,
  },
  {
    source: '/docs/cli/pull/index.html',
    destination: '/docs/references/tier-cli#tier-pull',
    permanent: false,
  },
  {
    source: '/docs/cli/connect',
    destination: '/docs/references/tier-cli#tier-connect',
    permanent: false,
  },
  {
    source: '/docs/cli/connect/index.html',
    destination: '/docs/references/tier-cli#tier-connect',
    permanent: false,
  },
  {
    source: '/docs/cli/limits',
    destination: '/docs/references/tier-cli#tier-limits',
    permanent: false,
  },
  {
    source: '/docs/cli/limits/index.html',
    destination: '/docs/references/tier-cli#tier-limits',
    permanent: false,
  },
  {
    source: '/docs/cli/index',
    destination: '/docs/references/tier-cli',
    permanent: false,
  },
  {
    source: '/docs/cli/subscribe',
    destination: '/docs/references/tier-cli#tier-subscribe',
    permanent: false,
  },
  {
    source: '/docs/cli/subscribe/index.html',
    destination: '/docs/references/tier-cli#tier-subscribe',
    permanent: false,
  },
  {
    source: '/docs/cli/serve',
    destination: '/docs/references/tier-cli#tier-serve',
    permanent: false,
  },
  {
    source: '/docs/cli/serve/index.html',
    destination: '/docs/references/tier-cli#tier-serve',
    permanent: false,
  },
  {
    source: '/docs/cli/switch',
    destination: '/docs/references/tier-cli#tier-switch',
    permanent: false,
  },
  {
    source: '/docs/cli/switch/index.html',
    destination: '/docs/references/tier-cli#tier-switch',
    permanent: false,
  },
  {
    source: '/docs/cli/ls',
    destination: '/docs/references/tier-cli#tier-ls',
    permanent: false,
  },
  {
    source: '/docs/cli/ls/index.html',
    destination: '/docs/references/tier-cli#tier-ls',
    permanent: false,
  },

  // Redirects for the main website links
  {
    source: '/releases',
    destination: 'https://github.com/tierrun/tier/releases',
    permanent: false,
  },
  {
    source: '/issues/new',
    destination: 'https://github.com/tierrun/tier/issues/new/choose',
    permanent: false,
  },
  // Join Slack
  {
    source: '/slack',
    destination:
      'https://join.slack.com/t/tier-community/shared_invite/zt-1blotqjb9-wvkYMo8QkhaEWziprdjnIA',
    permanent: false,
  },
  {
    source: '/join-slack',
    destination:
      'https://join.slack.com/t/tier-community/shared_invite/zt-1blotqjb9-wvkYMo8QkhaEWziprdjnIA',
    permanent: false,
  },
]
