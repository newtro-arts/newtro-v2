/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  images: {
    domains: [
      "pbs.twimg.com",
      "remote-image.decentralized-content.com",
      "customer-35w74jq9s1d58g1v.cloudflarestream.com",
      "ipfs.io",
      "photos.app.goo.gl",
      "i.imgur.com",
      "res.cloudinary.com",
      "cloudflare-ipfs.com",
      "https://pub-45a4182a1c2b41f3a18151a5e2a4ce29.r2.dev",
      "storage.newtro.xyz",
      "ipfs.decentralized-content.com",
      "euc.li",
      "rainbow.mypinata.cloud",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
