const Plugin = require('./lib/plugin');
const spawn = require('child_process').spawn;

const plugin = new Plugin();

let debug = false;

plugin.on('params', params => {
  start(params);
});

plugin.on('channels', channels => {
  // console.log(channels);
});

plugin.on('debug', mode => {
  debug = mode;
});

function close(code) {
  console.log(`child process exited with code ${code}`);
}

function error(data) {
  // console.log(`stderr: ${data}`);
}

function out(data) {
  plugin.debug(data.toString());
}


function start(options) {
  buf = '';
  const tcpflow = spawn('tcpflow', ['-c', 'port', options.port]);

  tcpflow.stdout.on('data', out);
  tcpflow.stderr.on('data', error);
  tcpflow.on('close', close);
}
