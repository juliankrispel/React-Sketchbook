var fs = require('fs');
var path = require('path');

var compileTemplate = function() {
  var filePath = process.argv[2];
  if (!filePath) {
    throw new Error('you need to define a path to the component that you want to mount');
  }

  var templatePath = path.resolve(__dirname, '../src/_App.js');
  var outputPath = path.resolve(__dirname, '../src/App.js');
  var fileReg = /<<<moduleFileName>>>/gi;
  var moduleReg = /<<<moduleName>>>/gi;

  fs.writeFileSync(
    outputPath,
    fs.readFileSync(templatePath)
    .toString()
    .replace(fileReg, path.relative(__dirname, path.resolve(process.cwd(), filePath)))
  );
};

compileTemplate();

module.exports = compileTemplate;
