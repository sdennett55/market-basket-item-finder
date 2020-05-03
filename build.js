var UglifyJS = require('uglify-js');
var fs = require('fs');
var path = require('path');

var code = fs.readFileSync("script.js", "utf8");
var result = UglifyJS.minify(code);
console.log(fs.readFileSync(path.join('dist', 'script.js')));

fs.writeFileSync("script.min.js", UglifyJS.minify(fs.readFileSync(path.join('dist', 'script.js'), "utf8")).code, "utf8");