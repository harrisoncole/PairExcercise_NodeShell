const fs = require('fs');

function cat (done, file) {
  let path = `./${file}`
  fs.readFile(path, (err, data) => {
    if (err) {
      done(`error: ${err}`);
    } else {
      done(data.toString().trim());
    }
  });
}

module.exports = cat;
