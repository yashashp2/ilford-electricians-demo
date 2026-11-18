import type { NextConfig } from "next";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/ilford-electricians-demo" : "";
const config: NextConfig = {
  poweredByHeader: false,
  ...(isGitHubPages ? { output: "export", trailingSlash: true } : {}),
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: isGitHubPages },
  ...(!isGitHubPages
    ? {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Robots-Tag", value: "noindex, nofollow" },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
                { key: "X-Content-Type-Options", value: "nosniff" },
              ],
            },
          ];
        },
      }
    : {}),
};
export default config;
