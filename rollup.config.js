import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'

export default {
  entry: 'src/main.js',
  moduleName: 'mdaExample',
  plugins: [
    json(),
    babel({ presets: 'es2015-rollup' })
  ],
  targets: [
    { dest: 'dist/bundle.amd.js', format: 'amd' },
    { dest: 'dist/bundle.cjs.js', format: 'cjs' },
    { dest: 'dist/bundle.es.js', format: 'es' },
    { dest: 'dist/bundle.iife.js', format: 'iife' },
    { dest: 'dist/bundle.umd.js', format: 'umd' }
  ]
}
