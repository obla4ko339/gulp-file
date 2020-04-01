let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require("browser-sync");
let concat = require('gulp-concat')
let uglify = require('gulp-uglifyjs')
let imagemin = require('gulp-imagemin')
let pngquant = require('imagemin-pngquant')
let cache = require("gulp-cache")
let ts = require("gulp-typescript")

const webpack = require("webpack")
const webpackStream = require("webpack-stream")
const webpackConfig = require("./webpack.config.js")



gulp.task("sass", ()=>{
    return gulp.src("app/sass/main.sass")
            .pipe(sass())
            .pipe(gulp.dest("app/css"))
            .pipe(browserSync.reload({stream:true}))
})

gulp.task("browserSync", ()=>{
    browserSync({
        server:{
            baseDir: 'app'
        },
        notify:false
    })
})

gulp.task("scripts", ()=>{
    return gulp.src([
        "app/libs/jquery/dist/jquery.min.js",
        "app/libs/magnific-popup/dist/jquery.magnific-popup.min.js"
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
})


gulp.task("img", ()=>{
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced:true,
            progressive:true,
            svgoPlugins:[{removeViewBox:false}],
            use:[pngquant()]
        })))
        .pipe(gulp.dest("dist/img"))
})

gulp.task('js', ()=>{
    return gulp.src("app/js/index.js")
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('dist/js'))
})


gulp.task("ts", ()=>{
    return gulp.src("app/ts/**/*.ts")
        .pipe(ts({
            noImplicitAny:true,
            outFile:'output.js'
        }))
        .pipe(gulp.dest("dist/js"))
})


gulp.task("watch",['sass','browserSync','js' ], ()=>{
    gulp.watch("app/sass/**/*.sass", ['sass'])
    gulp.watch("app/*.html", browserSync.reload)
    gulp.watch(["app/js/common.js", 'app/libs/**/*.js'], browserSync.reload)
})



gulp.task("build", ['img','sass', 'js' ], ()=>{

    gulp.src("app/css/main.css")
        .pipe(gulp.dest('dist/css'))

    gulp.src("app/fonts/**/*")
        .pipe(gulp.dest('dist/fonts'))

    gulp.src("app/js/**/*")
        .pipe(gulp.dest('dist/js'))

    gulp.src("app/*.html")
        .pipe(gulp.dest("dist"))
})

gulp.task("default", ['watch'])