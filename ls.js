const fs = require('fs');

function ls (done) {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      const fileList = files.join('\n');
      done(fileList);
    }
  });

}

module.exports = ls;
