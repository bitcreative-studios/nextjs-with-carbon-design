const withPlugins = require('next-compose-plugins')
const bundleAnalyzer = require('@next/bundle-analyzer')
const path = require('path')

// Plugins
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /*config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
  },
  webpack(config) {
    config.resolve.alias['~'] = path.join(__dirname, 'src')
    return config
  },
}

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig)
