'use strict';

const path = require('path');
const os = require('os');

let repl = require('./../');

repl({
  cli: path.join(__dirname, 'cli'),
  history: path.join(os.tmpdir(), 'repl.log')
});