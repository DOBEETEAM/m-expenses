module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          // Top Level alias
          '@assets': './assets',
          '@data': './src/data',
          '@resources': './src/resources',
          '@routes': './src/routes',
          '@app': './src/app',
          '@utils': './src/utils',
          '@helpers': './src/helpers',
          '@shared': './src/shared',
          '@network': './src/network',
          '@components': './src/components',
          '@screens': './src/screens',
          '@features': './src/features',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
