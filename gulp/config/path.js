const buildFolder = './dist';
const srcFolder = './src';

export const path={
   build: {
      files: `${buildFolder}/resources/`, 
      html: `${buildFolder}/`,
      css: `${buildFolder}/css/`,
      js: `${buildFolder}/js/`,
      images: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
   },
   src: {
      files: `${srcFolder}/resources/**/*.*`, 
      html: `${srcFolder}/*.html`,
      scss: `${srcFolder}/scss/style.scss`,
      js: `${srcFolder}/js/script.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`, 
      svg: `${srcFolder}/img/**/*.svg`,
      svgicons: `${srcFolder}/icons/*.svg`,
   },
   watch: {
      files: `${srcFolder}/resources/**/*.*`,  
      html: `${srcFolder}/**/*.html`,
      scss: `${srcFolder}/scss/**/*.scss`,
      js: `${srcFolder}/js/**/*.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`, 
      svgicons: `${srcFolder}/icons/*.svg`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder
}