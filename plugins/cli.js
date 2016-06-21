'use strict';

const fs = require('fs-extra');
const glob = require('glob');

module.exports = function(dir) {
  if (!dir) return;

  fs.ensureDirSync(dir);

  glob.sync(dir + '/*').forEach(function(file) {
    let obj = require(file);

    Object.keys(obj).forEach(function(name) {
      global[name] = obj[name];
    });    
  });
};