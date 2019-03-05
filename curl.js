const request = require('request');

const curl = (done, url) => {
  request(url, (err, response, body) => {

    if (err) {
      done(`error: ${err}`);
    } else {
      done(body);
    }
  })
}

module.exports = curl;

