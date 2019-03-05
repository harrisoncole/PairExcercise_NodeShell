const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');



const done = output => {
  process.stdout.write(output);
  process.stdout.write('\nprompt >');
}

process.stdout.write('prompt >');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd.slice(0, 3) === 'cat') {
    cat(done, cmd.slice(4));
  } else if (cmd.slice(0, 4) === 'curl') {
    curl(done, cmd.slice(5));
  } else {
    process.stdout.write('You said: ' + cmd);
    process.stdout.write('\nprompt >')
  }
});

