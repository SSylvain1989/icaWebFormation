const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules");
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");
module.exports = {
  env: {
    STRIPE_PUBLIC_KEY: "your_stripe_public_key_here",
    API_URL: "http://localhost:3001"
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty"
      };
    }
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 10000000,
          name: "[name].[ext]"
        }
      }
    }),
      config.resolve.modules.push(__dirname);

    config.resolve.alias = {
      ...config.resolve.alias
    };

    return config;
  }
};

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ["reusecore", "common"]
      }
    ],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90
        },
        webp: {
          preset: "default",
          quality: 90
        }
      }
    ],
    withFonts,
    withCSS
  ],
  {
    distDir: "../../dist/functions/next"
  }
);
