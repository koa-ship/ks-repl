'use strict';

const fs = require('fs');

module.exports = function(repl, file) {

  try {
    let stat = fs.statSync(file);
    repl.rli.history = fs.readFileSync(file, 'utf-8').split('\n').reverse();
    repl.rli.history.shift();
    repl.rli.historyIndex = -1;
  } catch (e) {}

  let fd = fs.openSync(file, 'a');

  repl.rli.addListener('line', function(code) {
    if (code && ['.history', '.clear'].indexOf(code) == -1) {
      fs.write(fd, code + '\n');
    }
  });

  process.on('exit', function() {
    fs.closeSync(fd);
  });

  repl.defineCommand('history', {
    help : 'Show history',
    action : function() {
      let out = [];
      repl.rli.history.forEach(function(v, k) {
        out.push(v);
      });

      repl.outputStream.write(out.reverse().join('\n') + '\n');
      repl.displayPrompt();
    }
  });

  repl.defineCommand('clear', {
    help : 'Clear history',
    action : function() {
      fs.writeFileSync(file, '');
      repl.rli.history = [];
      repl.rli.historyIndex = -1;
      repl.displayPrompt();
    }
  });

};