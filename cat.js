const fs = require('fs');

function cat (file) {
  let path = `./${file}`
  fs.readFile(path, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data.toString().trim());
      process.stdout.write('\nprompt >');

    }
  });
}

module.exports = cat;
