const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;
const server = http.createServer((req, res) => {
  res.writeHead(301, {Location: 'https://kuroo9.github.io/mid-project/' });
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 