'use strict';

module.exports = function(options) {

  let repl = require('repl');
  let replServer = repl.start('> ');

  replServer.on('exit', () => {
    process.exit();
  });

};