/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        search:
          "?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "www.coaster101.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "www.themeparkjames.co.uk",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "www.**",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
