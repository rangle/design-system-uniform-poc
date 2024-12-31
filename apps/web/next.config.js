/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        UNIFORM_PROJECT_ID: process.env.UNIFORM_PROJECT_ID,
        UNIFORM_API_KEY: process.env.UNIFORM_API_KEY,
        UNIFORM_PREVIEW_SECRET: process.env.UNIFORM_PREVIEW_SECRET,
        UNIFORM_CLI_API_KEY: process.env.UNIFORM_CLI_API_KEY,
    },
  };

console.log('Environment in Vercel Build:', process.env.UNIFORM_PREVIEW_SECRET);

export default nextConfig;
