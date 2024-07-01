// Define your Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    // Increase the timeout limit as per your requirement
    staticPageGenerationTimeout: 3000,
  },
};



export default nextConfig


