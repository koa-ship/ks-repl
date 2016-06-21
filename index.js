'use strict';

const history = require('./plugins/history');
const cli = require('./plugins/cli');

module.exports = function(options) {

  cli(options.cli);

  let repl = require('repl').start('> ');

  history(repl, options.history);

  repl.on('exit', function() {
    process.exit();
  });

};