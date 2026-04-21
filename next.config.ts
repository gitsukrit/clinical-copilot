import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Turbopack to leave Prisma strictly on the server
  serverExternalPackages: ['@prisma/client'],
};

export default nextConfig;