let WebSocket = require("ws").WebSocket

const ws = new WebSocket('ws://www.host.com/path');

ws.on('error', console.error);

ws.on('open', function open() {
  console.log("new connection");
  ws.send('something');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});
