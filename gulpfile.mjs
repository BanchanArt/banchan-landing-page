// From https://dev.to/salttechno/how-to-setup-tailwind-css-with-postcss-browsersync-1j41

import gulp from "gulp";
const { watch, series, src, dest } = gulp;
import BrowserSync from "browser-sync";
import postcss from "gulp-postcss";
import imagemin from "gulp-imagemin";

const browserSync = BrowserSync.create();

// Task for compiling our CSS files using PostCSS
gulp.task("css", () => {

});

function cssTask() {
    return src("./src/*.css") // read .css files from ./src/ folder
        .pipe(postcss()) // compile using postcss
        .pipe(dest("./assets/css")) // paste them in ./assets/css folder
        .pipe(browserSync.stream());
}

// Task for minifying images
function imageminTask() {
    return src("./assets/images/*")
        .pipe(imagemin())
        .pipe(dest("./assets/images"));
}

// Serve from browserSync server
function browsersyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: "./",
        },
    });
    cb();
}

function browsersyncReload(cb) {
    browserSync.reload();
    cb();
}

// Watch Files & Reload browser after tasks
function watchTask() {
    watch("./**/*.html", browsersyncReload);
    watch(["./**/*.html", "./src/*.css"], series(cssTask, browsersyncReload));
}

// Default Gulp Task
export default series(cssTask, browsersyncServe, watchTask);
export {
    cssTask as css,
    imageminTask as images
};
