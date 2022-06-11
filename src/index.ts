import createServer from './server';
const server = createServer();
const port = Number(process.env.PORT || 3000);

server.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
