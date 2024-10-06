// import path from 'path';
// // import { fileURLToPath } from 'url';
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

/**
 * @type {import('next').NextConfig}
 */

/*****************************************************************************
 * SET YOUR CONFIGURATION HERE
 *****************************************************************************/

// Set base path if your static app does not start from root
const basePath = '/web-speech-api';

/*****************************************************************************
 *****************************************************************************/

const webpackBasePath = process.env.SPA_EXP_BUILD === 'true' ? basePath : ''

const nextConfig = {
  basePath: webpackBasePath,
  assetPrefix: webpackBasePath,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
