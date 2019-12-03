const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../public').mergeManifest();

mix.scripts([
    __dirname + '/Resources/assets/plugins/jquery/jquery.min.js', '../../public/js/jquery.js',
    __dirname + '/Resources/assets/plugins/bootstrap/js/bootstrap.min.js', '../../public/js/bootstrap.js',
    __dirname + '/Resources/assets/js/adminlte.min.js', '../../public/js/admintemplate.js'
],'../../public/js/admintemplate.js');

mix.styles([
    __dirname + '/Resources/assets/css/adminlte.min.css',
    __dirname + '/Resources/assets/plugins/fontawesome-free/css/fontawesome.min.css',
], '../../public/css/admintemplate.css');

mix.copy( __dirname + '/Resources/assets/img', '../../public/img', false );

if (mix.inProduction()) {
    mix.version();
}