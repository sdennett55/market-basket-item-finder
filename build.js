var UglifyJS = require('uglify-js');
var fs = require('fs');
var path = require('path');

const srcFile = fs.readFileSync(path.join('src', 'script.js'), "utf8");

fs.writeFileSync(path.join('dist', 'script.min.js'), UglifyJS.minify(srcFile).code, "utf8");