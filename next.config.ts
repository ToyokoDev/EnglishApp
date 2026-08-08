import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'glowing-disco-r49pq4r44gv6f59x-3000.app.github.dev', // Domain Codespaces của bạn
        'localhost:3000',
      ],
    },
  },
};

export default nextConfig;
