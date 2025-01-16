/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone", // Ensures compatibility for SSR and dynamic content
  images: {
    domains: [
      'utfs.io',
      'cdn.shopify.com',
      'www.phoneplacekenya.com',
      'q896co9uas.ufs.sh',
    ], // Allows external image domains
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true, // Redirect from /old-path to /new-path
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/custom-route',
        destination: '/api/some-endpoint',
      },
    ];
  },
};
