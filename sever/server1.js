const http = require("http");
const fs = require("fs/promises");

const server = http
  .createServer(async (req, res) => {
    try {
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      const data = await fs.readFile("./serverTo.html");
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(8080);

server.on("listening", () => {
  console.log("8080 포트에서 대기중");
});

server.on("error", (err) => {
  console.log(err);
});
