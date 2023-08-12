const webpack = require('webpack');
const PRODUCTION = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    externalDir:true
  },
    webpack: (config) => {
      config.plugins.push(
          new webpack.container.ModuleFederationPlugin({
          name:'host',
          remotes:{
              ui: PRODUCTION ? 'https://CDNURL.com/remoteEntry.js' :'ui@http://localhost:8080/remoteEntry.js'
          },
      }))
        return config
    }
}

module.exports = nextConfig
