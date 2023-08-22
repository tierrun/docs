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
    destination: '/docs/cli/overview',
    permanent: false,
  },
  {
    source: '/docs/cli/index.html',
    destination: '/docs/cli/overview',
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
    source: '/docs/references/tier-cli',
    destination: '/docs/cli/overview',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#installing-tier-cli',
    destination: '/docs/cli/install',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-connect',
    destination: '/docs/cli/commands#tier-connect',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-switch',
    destination: '/docs/cli/commands#tier-switch',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-ls',
    destination: '/docs/cli/commands#tier-ls',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-report',
    destination: '/docs/cli/commands#tier-report',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-push',
    destination: '/docs/cli/commands#tier-push',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-limits',
    destination: '/docs/cli/commands#tier-limits',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-phases',
    destination: '/docs/cli/commands#tier-phases',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-serve',
    destination: '/docs/cli/commands#tier-serve',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-subscribe',
    destination: '/docs/cli/commands#tier-subscribe',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-clean',
    destination: '/docs/cli/commands#tier-clean',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-version',
    destination: '/docs/cli/commands#tier-version',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-pull',
    destination: '/docs/cli/commands#tier-pull',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-whoami',
    destination: '/docs/cli/commands#tier-whoami',
    permanent: false,
  },
  {
    source: '/docs/references/tier-cli#tier-whois',
    destination: '/docs/cli/commands#tier-whois',
    permanent: false,
  },
  {
    source: '/docs/install',
    destination: '/docs/cli/install',
    permanent: false,
  },
  {
    source: '/docs/install/index.html',
    destination: '/docs/cli/install',
    permanent: false,
  },
  {
    source: '/docs/cli/whois',
    destination: '/docs/cli/commands#tier-whois',
    permanent: false,
  },
  {
    source: '/docs/cli/whois/index.html',
    destination: '/docs/cli/commands#tier-whois',
    permanent: false,
  },
  {
    source: '/docs/cli/whoami',
    destination: '/docs/cli/commands#tier-whoami',
    permanent: false,
  },
  {
    source: '/docs/cli/whoami/index.html',
    destination: '/docs/cli/commands#tier-whoami',
    permanent: false,
  },
  {
    source: '/docs/cli/phases',
    destination: '/docs/cli/commands#tier-phases',
    permanent: false,
  },
  {
    source: '/docs/cli/phases/index.html',
    destination: '/docs/cli/commands#tier-phases',
    permanent: false,
  },
  {
    source: '/docs/cli/report',
    destination: '/docs/cli/commands#tier-report',
    permanent: false,
  },
  {
    source: '/docs/cli/report/index.html',
    destination: '/docs/cli/commands#tier-report',
    permanent: false,
  },
  {
    source: '/docs/cli/push',
    destination: '/docs/cli/commands#tier-push',
    permanent: false,
  },
  {
    source: '/docs/cli/push/index.html',
    destination: '/docs/cli/commands#tier-push',
    permanent: false,
  },
  {
    source: '/docs/cli/clean',
    destination: '/docs/cli/commands#tier-clean',
    permanent: false,
  },
  {
    source: '/docs/cli/clean/index.html',
    destination: '/docs/cli/commands#tier-clean',
    permanent: false,
  },
  {
    source: '/docs/cli/version',
    destination: '/docs/cli/commands#tier-version',
    permanent: false,
  },
  {
    source: '/docs/cli/version/index.html',
    destination: '/docs/cli/commands#tier-version',
    permanent: false,
  },
  {
    source: '/docs/cli/pull',
    destination: '/docs/cli/commands#tier-pull',
    permanent: false,
  },
  {
    source: '/docs/cli/pull/index.html',
    destination: '/docs/cli/commands#tier-pull',
    permanent: false,
  },
  {
    source: '/docs/cli/connect',
    destination: '/docs/cli/commands#tier-connect',
    permanent: false,
  },
  {
    source: '/docs/cli/connect/index.html',
    destination: '/docs/cli/commands#tier-connect',
    permanent: false,
  },
  {
    source: '/docs/cli/limits',
    destination: '/docs/cli/commands#tier-limits',
    permanent: false,
  },
  {
    source: '/docs/cli/limits/index.html',
    destination: '/docs/cli/commands#tier-limits',
    permanent: false,
  },
  {
    source: '/docs/cli/index',
    destination: '/docs/cli/overview',
    permanent: false,
  },
  {
    source: '/docs/cli/subscribe',
    destination: '/docs/cli/commands#tier-subscribe',
    permanent: false,
  },
  {
    source: '/docs/cli/subscribe/index.html',
    destination: '/docs/cli/commands#tier-subscribe',
    permanent: false,
  },
  {
    source: '/docs/cli/serve',
    destination: '/docs/cli/commands#tier-serve',
    permanent: false,
  },
  {
    source: '/docs/cli/serve/index.html',
    destination: '/docs/cli/commands#tier-serve',
    permanent: false,
  },
  {
    source: '/docs/cli/switch',
    destination: '/docs/cli/commands#tier-switch',
    permanent: false,
  },
  {
    source: '/docs/cli/switch/index.html',
    destination: '/docs/cli/commands#tier-switch',
    permanent: false,
  },
  {
    source: '/docs/cli/ls',
    destination: '/docs/cli/commands#tier-ls',
    permanent: false,
  },
  {
    source: '/docs/cli/ls/index.html',
    destination: '/docs/cli/commands#tier-ls',
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
