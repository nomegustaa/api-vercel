import jsonServer from 'json-server';

const server = jsonServer.create();
const route = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(route);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
