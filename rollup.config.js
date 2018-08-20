import typescript from 'rollup-plugin-typescript2';

export default {
  entry: './src/index.ts',
  dest: './dist/piexif.js',
  format: 'umd',
  moduleName: 'piexif',
  plugins: [
    typescript()
  ]
}