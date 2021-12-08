const { parallel, dest, src } = require("gulp");
const uglify = require("gulp-uglify");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

function tsToJs() {
  return tsProject.src().pipe(tsProject()).js;
}

function tsToJsProd() {
  return tsToJs().pipe(uglify()).pipe(dest("dist"));
}

function tsToJsDev() {
  return tsToJs().pipe(dest("dist"));
}

function public() {
  return src("public/**/*").pipe(dest("dist"));
}

exports.default = parallel(tsToJsDev, public);
exports.build = parallel(tsToJsProd, public);
