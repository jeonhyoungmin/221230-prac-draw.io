const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {});
server.listen(5678, (err) => {
  if (error) throw err;
  console.log("서버 가동");
});
