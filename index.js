const Plugin = require('./lib/plugin');

const plugin = new Plugin();

let channelsList = [];
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


function start(options) {

}
