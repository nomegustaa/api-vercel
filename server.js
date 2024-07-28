import jsonServer from 'json-server';
const fs = require('fs');
const path = require('path');

const server = jsonServer.create();
const db = JSON.parse(fs.readFileSync(path.join('db.json')));
const route = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(route);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
