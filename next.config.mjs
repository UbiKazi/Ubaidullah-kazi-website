/** Static export: the whole site ships as plain files (Vercel, Netlify, any static host). */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};
export default nextConfig;
