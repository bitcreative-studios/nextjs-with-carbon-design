import withPlugins from 'next-compose-plugins'
import bundleAnalyzer from '@next/bundle-analyzer'


// Plugins
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}

export default withPlugins([[withBundleAnalyzer]], nextConfig)
