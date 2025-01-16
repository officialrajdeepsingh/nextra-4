//import type { NextConfig } from "next";

import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  contentDirBasePath: '/docs',
})

const nextConfig = withNextra({
  reactStrictMode: true,
})
/*
 *   experimental: {
    turbo: {
      rules: {
        './components/icons/*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js'
        }
      }
    },
    optimizePackageImports: ['@components/icons']
  }

 * */
export default nextConfig
