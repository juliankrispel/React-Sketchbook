var fs = require('fs');
var path = require('path');

module.exports = function() {
  if (!global.moduleFilePath) {
    throw new Error('you need to define a path to the component that you want to mount');
  }

  var templatePath = path.resolve(__dirname, '../src/_App.js');
  var outputPath = path.resolve(__dirname, '../src/App.js');
  console.log('template path', templatePath);
  console.log('output path', outputPath);
  var fileReg = /<<<moduleFileName>>>/gi;
  var moduleReg = /<<<moduleName>>>/gi;

  fs.writeFileSync(
    outputPath,
    fs.readFileSync(templatePath)
    .toString()
    .replace(fileReg, path.relative(__dirname, path.resolve(process.cwd(), global.moduleFilePath)))
  );
};
