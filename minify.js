'use strict'

const write = require('fs').writeFileSync
const minify = require('uglify-js').minify
const path = (...p) => `./dist/bundle.${p.join('.')}.js`
const minifyFormat = f => write(path(f, 'min'), minify(path(f)).code)
const formats = ['amd', 'cjs', 'iife', 'umd'] // no es

formats.forEach(minifyFormat)
