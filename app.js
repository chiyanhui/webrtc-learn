const path = require('path');
const Koa = require('koa');
const KoaStatic = require('koa-static');
const SocketIO = require('socket.io');

const app = new Koa();
app.use(KoaStatic(path.join(__dirname, '/public')));

const server = require('http').createServer(app.callback()).listen(3000, () => {
  console.log('server listening port 3000');
});

const io = new SocketIO();
io.attach(server);
