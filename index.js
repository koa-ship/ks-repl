'use strict';

const history = require('./plugins/history');

module.exports = function(options) {

  let repl = require('repl').start('> ');

  history(repl, options.history);

  repl.on('exit', function() {
    process.exit();
  });

};