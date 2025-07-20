import type {NextConfig} from 'next';

const i18n = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
}

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export type Locale = typeof i18n['locales'][number]
export { i18n };
export default nextConfig;
