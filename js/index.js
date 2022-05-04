const http = require('http');
const path = require("path");

const encoding = "utf8";
const firstFilePath = path.resolve(__dirname, "content", "first.txt");
const secondFilePath = path.resolve(__dirname, "content", "second.txt");

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Welcome to our home page');
  }
  if(req.url === '/about') {
    res.end('Here is your short history');
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to finde the page you are looking for</p>
    <a href="/">Back home</a>
  `);
});

server.listen(5000, () => {
  console.log('Server run in 5000')
});
