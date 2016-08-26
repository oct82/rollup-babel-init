import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/main.js',
  format: 'umd',
  moduleName: 'main',
  plugins: [babel()],
  dest: 'main.bundle.js'
}
