/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Sources are 1280px wide; make sure that exact width is generated
    // rather than the next size down.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1280, 1920, 2048],
  },
};

export default nextConfig;
