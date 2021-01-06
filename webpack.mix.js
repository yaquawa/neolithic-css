const mix = require('laravel-mix')

mix.webpackConfig({
  stats: 'minimal',
})

if (mix.inProduction()) {
  mix.options({
    processCssUrls: false,
    postCss: [require('@hail2u/css-mqpacker')],
  })
}

const packageName = 'framework'

mix.sass(`packages/${packageName}/tests/${packageName}.test.scss`, `packages/${packageName}/tests`).
  browserSync({
    server: `packages/${packageName}/tests`,
    proxy: false,
    open: false,
  })
