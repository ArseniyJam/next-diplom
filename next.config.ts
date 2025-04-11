import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      remotePatterns: [
         {
            protocol: "http",
            hostname: "localhost",
            port: "1337",
            pathname: "/uploads/**/*",
         },
         {
            protocol: "https",
            hostname: "steadfast-advice-cc43d47f25.strapiapp.com",
         },
      ],
   },
};

export default nextConfig;
