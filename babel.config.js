module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, useBuiltIns: false }],
    '@babel/preset-flow',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          root: './'
        }
      }
    ],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties'
  ],
  comments: false,
  sourceMaps: 'inline',
  retainLines: true
}
