const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const path = require('path');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const lessFile = [
    './assets/style/main.less'
];
const css = [
    './assets/style/main.css'
];

const jsFile = [
    './assets/js/data.js',
	'./assets/js/functions.js',
    './assets/js/app.js'
];

//less
let lessCss = () => {
    return gulp.src(lessFile)
    .pipe(less({paths: [path.join(__dirname, 'less', 'includes')]}))
    .pipe(gulp.dest('assets/style'))
}

//style
function style() {
    return gulp.src(css)
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        overrideBrowserslist:['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(gulp.dest('assets/build/css'))

};

//scripts
function scripts() {
    return gulp.src(jsFile)
    .pipe(concat('script.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify({
        toplevel: true
    }))
    .pipe(gulp.dest('assets/build/js'))
};

//run style
gulp.task('style', style);
//run scripts
gulp.task('scripts', scripts);
//run less
gulp.task('lessCss', lessCss);