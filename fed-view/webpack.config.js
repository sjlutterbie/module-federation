const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    minimize: false,
  },
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'fed_view',
      filename: 'fed_view.registry.js',
      remotes: {
        shared_lib: 'shared_lib@http://localhost:8082/shared_lib.registry.js',
      },
      exposes: {
        './FederatedPage': './src/FederatedPage',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HTMLWebpackPlugin({}),
  ],
};
