'use strict';

const os = require('os');

module.exports = {

  whoami: function() {
    return os.userInfo();
  }

};