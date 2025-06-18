// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb", // หรือค่าที่คุณต้องการ
      allowedOrigins: ["http://localhost:3000"], // หรือ ["*"]
    },
  },
};

export default nextConfig;
