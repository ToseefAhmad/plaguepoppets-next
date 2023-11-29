// module.exports = {
//   async headers() {
//     return [
//       {
//         // Allow access to the Belizarius.ttf font file from https://plaguepoppets.io
//         source: '/fonts/Belizarius.ttf',
//         headers: [
//           {
//             key: 'Access-Control-Allow-Origin',
//             value: 'https://plaguepoppets.io',
//           },
//         ],
//       },
//     ];
//   },
// };

/** @type {import('next').NextConfig} */
const withSvgr = require('@newhighsco/next-plugin-svgr')


const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.plaguepoppets.io',
        port: '',
        pathname: '/**',
      }
    ],
    domains:['plaguepoppets.io']
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.css?$/,
  //     type: 'asset/inline',
  //   })

  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     use: ['@svgr/webpack'],
  //   })

  //   return config
  // },
}

module.exports = withSvgr({
  svgrOptions: {
    /* config options here */
  },
  ...nextConfig
})

// module.exports = nextConfig
