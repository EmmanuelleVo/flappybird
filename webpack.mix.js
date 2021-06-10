let mix = require('laravel-mix')

mix.setPublicPath('dist/')
    .copy('src/index.html', 'dist/index.html')
    .copyDirectory('src/resources', 'dist/resources')
    .js('src/js/main.js', 'dist/js/')
    .sass('src/scss/main.scss', 'dist/css/')
