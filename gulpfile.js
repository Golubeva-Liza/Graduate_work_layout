import gulp from "gulp";
import { path } from "./gulp/config/path.js";

import del from "del";
import fileinclude from "gulp-file-include";
import replace from "gulp-replace"; //поиск и замена путей
import versionNumber from "gulp-version-number";
import plumber from "gulp-plumber"; //обработка ошибок
import notify from 'gulp-notify'; //вывод сообщений об ошибках в windows
import browserSync from "browser-sync";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; //сжатие css
import autoPrefixer from "gulp-autoprefixer"; //вендорные префиксы
import groupCssMediaQueries from 'gulp-group-css-media-queries'; //группировка медиа запросов
import webpack from "webpack-stream";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer"; //чтобы не перемещались те изображения, которые не изменились
import fonter from 'gulp-fonter';
import ttf2woff2 from "gulp-ttf2woff2";
import fs from "fs";
import svgSprite from "gulp-svg-sprite";

const sass = gulpSass(dartSass);


//задачи
const reset = () => {
   return del(path.clean);
}
const copy = () => {
   return gulp.src(path.src.files)
      .pipe(gulp.dest(path.build.files))
}
const html = () => {
   return gulp.src(path.src.html)
      .pipe(plumber(
         notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
         })
      ))
      .pipe(fileinclude())
      .pipe(replace(/@img\//g, 'img/'))
      .pipe(
         versionNumber({
            'value': '%DT%',//текущая дата и время
            'append': {
               'key': '_v',
               'cover': 0,
               'to': [
                  'css',
                  'js',
               ]
            },
            'output': {
               'file': 'gulp/version.json'
            }
         })
      )
      .pipe(gulp.dest(path.build.html))
      .pipe(browserSync.stream());//обновление браузера после обновления файлов
}
const server = (done) => {
   browserSync.init({
      server: {
         baseDir: `${path.build.html}` //откуда идет запуск файлов
      },
      notify: false, 
      port: 3000,
   })
}
const styles = () => {
   return gulp.src(path.src.scss, {sourcemaps: true})
      .pipe(plumber(
         notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
         })
      ))
      .pipe(replace(/@img\//g, '../img/'))
      .pipe(sass({
         outputStyle: 'expanded'
      }))
      .pipe(groupCssMediaQueries())
      .pipe(autoPrefixer({
         grid: true,
         overrideBrowserlist: ["last 3 versions"],
         cascade: true
      }))
      // .pipe(gulp.dest(path.build.css))//style.css
      .pipe(cleanCss())
      .pipe(rename({
         extname: ".min.css"
      }))
      .pipe(gulp.dest(path.build.css))//style.min.css
      .pipe(browserSync.stream());
}
const js = () => {
   return gulp.src(path.src.js, {sourcemaps: true})
      .pipe(plumber(
         notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>"
         })
      ))
      .pipe(webpack({
         mode: 'development',
         output: {
            filename: 'script.min.js'
         }
      }))
      .pipe(gulp.dest(path.build.js))
      .pipe(browserSync.stream());
}
const images = () => {
   return gulp.src(path.src.images)
      .pipe(plumber(
         notify.onError({
            title: "IMAGES",
            message: "Error: <%= error.message %>"
         })
      ))
      .pipe(newer(path.build.images))
      .pipe(imagemin({
         progressive: true,
         svgoPlugins: [{ removeViewBox: false}],
         interlaced: true,
         optimizationLevel: 3 // 0 - 7
      }))
      .pipe(gulp.dest(path.build.images))
      .pipe(gulp.src(path.src.svg)) //svg не нуждаются в сжатии
      .pipe(gulp.dest(path.build.images))
      .pipe(browserSync.stream());
}
const otfToTtf = () => {
   return gulp.src(`${path.srcFolder}/fonts/*.otf`, {})
      .pipe(plumber(
         notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
         })
      ))
      //конвертируем в ttf
      .pipe(fonter({
         formats: ['ttf']
      }))
      //возвращаем туда же, откуда взяли
      .pipe(gulp.dest(`${path.srcFolder}/fonts/`))
}
const ttfToWoff = () => {
   return gulp.src(`${path.srcFolder}/fonts/*.ttf`, {})
      .pipe(plumber(
         notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
         })
      ))
      //конвертируем в woff
      .pipe(fonter({
         formats: ['woff']
      }))
      //в dist
      .pipe(gulp.dest(path.build.fonts))
      //снова ищем ttf, преобразуем в woff2, опять в папку с результатом
      .pipe(gulp.src(`${path.srcFolder}/fonts/*.ttf`))
      .pipe(ttf2woff2())
      .pipe(gulp.dest(path.build.fonts));
}
const fontsStyle = () => {
   //куда будут подключаться шрифты
   let fontsFile = `${path.srcFolder}/scss/base/fonts.scss`;
   fs.readdir(path.build.fonts, function (err, fontsFiles){
      //если есть файлы шрифтов
      if (fontsFiles) {
         //если нет файла стилей для шрифтов
         if (!fs.existsSync(fontsFile)){
            fs.writeFile(fontsFile, '', cb);
            let newFileOnly;
            for (var i = 0; i < fontsFiles.length; i++){
               let fontFileName = fontsFiles[i].split('.')[0];
               if (newFileOnly !== fontFileName) {
                  let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                  let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                  if (fontWeight.toLowerCase() === 'thin') {
                     fontWeight = 100;
                  } else if (fontWeight.toLowerCase() === 'extralight') {
                     fontWeight = 200;
                  } else if (fontWeight.toLowerCase() === 'light') {
                     fontWeight = 300;
                  } else if (fontWeight.toLowerCase() === 'medium') {
                     fontWeight = 500;
                  } else if (fontWeight.toLowerCase() === 'semibold') {
                     fontWeight = 600;
                  } else if (fontWeight.toLowerCase() === 'bold') {
                     fontWeight = 700;
                  } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                     fontWeight = 800;
                  } else if (fontWeight.toLowerCase() === 'black') {
                     fontWeight = 900;
                  } else {
                     fontWeight = 400;
                  }
                  fs.appendFile(fontsFile, `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
                  newFileOnly = fontFileName;
               }
            }
         } else {
            console.log("Файл fonts.scss уже существует. Его нужно удалить для обновления шрифтов");
         }
      }
   });
   return gulp.src(`${path.srcFolder}`);
   function cb() { }
}
const svgSprites = () => {
   return gulp.src(path.src.svgicons, {})
   .pipe(plumber(
      notify.onError({
         title: "ICONS",
         message: "Error: <%= error.message %>"
      })
   ))
   .pipe(svgSprite({
      mode: {
         stack: {
            sprite: `../icons/icons.svg`,
            example: true
         }
      }
   }))
   .pipe(gulp.dest(path.build.images));
}

//отдельная задача, не отслеживается watcher
export { svgSprites };


//наблюдение за изменениями в файлах
function watcher(){
   gulp.watch(path.watch.files, copy);//путь - действие
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, styles);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.images, images);
   gulp.watch(path.watch.svgicons, svgSprites);
}

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//главный сценарий
const mainTasks = gulp.series(fonts, gulp.parallel(svgSprites, copy, html, styles, js, images));


//сценарии выполения задач
const copyScript = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));


//сценарий по умолчанию
gulp.task('default', copyScript);