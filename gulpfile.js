var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js','src/**/*.js'];

gulp.task('serve', ['inject'], function(){
    var options = {
        script:'app.js',
        delayTime:1,
        env: {
            PORT:8889
        },
        watch: jsFiles
    }
    return nodemon(options)
        .on('restart', function(ev){
            console.log('Restarting server...');
        });
});

gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/*.css','./public/js/*,js'], {read: false});

    var injectOptions = {
        ignorePath:'/public'
    }

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    }
    return gulp.src('./src/views/*.jade')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});