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

  // webpack: function(config) {
  //   config.module.rules.push(
  //     {
  //       test: /\.(jpe?g|png|gif|svg|ico)$/,
  //       use: {
  //         loader: 'url-loader',
  //         options: {
  //           limit: 8192,
  //           fallback: 'file-loader',
  //           publicPath: `${webpackBasePath}/_next/static/images/`,
  //           outputPath: 'static/images/',
  //           name: '[name].[hash:15].[ext]',
  //         },
  //       },
  //     }
  //   );

  //   config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
  //   config.resolve.alias['@helpers'] = path.join(__dirname, 'helpers');
  //   config.resolve.alias['@images'] = path.join(__dirname, 'images');

  //   return config;
  // },
};

export default nextConfig;
