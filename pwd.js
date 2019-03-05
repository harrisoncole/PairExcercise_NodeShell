
function pwd (done) {
    const output = process.cwd();
    done(output);
  }
module.exports = pwd;

