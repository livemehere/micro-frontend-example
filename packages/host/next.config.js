const webpack = require('webpack');

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
              ui:'ui@http://localhost:8080/remoteEntry.js'
          },
      }))
        return config
    }
}

module.exports = nextConfig
