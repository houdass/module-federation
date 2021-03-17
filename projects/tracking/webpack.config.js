const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.json'), [
  /* mapped paths to share */
  'counter-lib'
]);

module.exports = {
  output: {
    uniqueName: 'tracking',
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: 'tracking',
      filename: 'trackingEntry.js',
      exposes: {
        './Module': './projects/tracking/src/app/tracking/tracking.module.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "shell": "shell@http://localhost:3003/remoteEntry.js",
      //     "product": "product@http://localhost:4004/remoteEntry.js",
      //     "customer": "customer@http://localhost:5005/remoteEntry.js",
      //     "order": "order@http://localhost:4200/remoteEntry.js",

      // },

      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },

        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
