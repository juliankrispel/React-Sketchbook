#!/usr/bin/env node

var program = require('commander');
var package = require('../package.json');
var path = require('path');
var colors = require('colors');
var compileTemplate = require('../scripts/compileTemplate');
var startStagingEnvironment = require('../scripts/start');

var version = 'V E R S I O N - ' + package.version;
var description =
  '***************************************************\n  ' +
  '***************************************************\n  ' +
  '*** ' + 'R E A C T  *  S K E T C H B O O K  *  C L I'.white.bold + ' ***\n  ' +
  '***************************************************\n  ' +
  '*** ' + version.white + ' *************************\n  ' +
  '***************************************************\n  ' +
  '***************************************************\n  ' +
  '***************************************************\n  ' +
  '*** ' + 'A zero-configuration staging environment'.white + ' ******\n  ' +
  '*** ' + 'for your react components'.white + ' *********************\n  ' +
  '***************************************************\n  ' +
  '***************************************************\n  ' +
  '\n  ' +
  '\n  ' +
  'Usage:\n    ' +
  '\n    ' +
  'sketchbook <module-file> [options]'.white +
  '\n  ';

function list(val) {
  return val.split(',');
}

program
  .version(package.version)
  .description(description)
  .usage('<module> [options]')
  .option('-p, --paths <paths>', 'paths added to NODE_PATH - separate with comma', list)
  .option('-c, --css <css-files>', 'Css files added to frame - separate with comma', list)
  .option('-f, --frameless', 'renders the staging without a container')
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp((text) => text);
}

if (program.args && program.args.length > 0) {
  var filePath = program.args[0];
  var extraNodePaths = []
  if (program.paths) {
    extraNodePaths = program.paths.map((p) => path.resolve(p))
  }

  global.moduleFilePath = filePath;
  global.extraNodePaths = extraNodePaths;
  compileTemplate();
  startStagingEnvironment();
}
