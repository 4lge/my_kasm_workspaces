/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Albrecht Gebhardt',
    description: 'Collection of KASM workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://alge.github.io/my_kasm_workspaces/',
    contactUrl: 'https://alge.github.io/my_kasm_workspaces/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/my_kasm_workspaces/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
