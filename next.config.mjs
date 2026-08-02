/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/chat": ["./src/app/pratham-chat-knowledge/**/*.md"],
    },
  },
};

export default nextConfig;
