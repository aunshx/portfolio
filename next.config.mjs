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
  // The résumé moved to Google Drive; old links to /resume.pdf follow it.
  // Keep in step with LINKS.resume in content/profile.ts.
  async redirects() {
    return [
      {
        source: "/resume.pdf",
        destination: "https://drive.google.com/file/d/12DklMUKkmv4QJcPMAh5xUn6p-NZDR1vJ/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
