const http2 = require("http2");
const fs = require("fs");

http2
  .createServer(
    {
      cert: fs.readFileSync("도메인 인증서 경로"),
      key: fs.readFileSync("도메인 비밀키 경로"),
      ca: [
        fs.readFileSync("상위 인증서 경로"),
        fs.readFileSync("상위 인증서 경로"),
      ],
    },
    (req, res) => {
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      res.write("<h1>hello node</h1>");
      res.end("<p>hello server</p>");
    }
  )
  .listen(443, () => {
    console.log("https는 443번 포트 고정임 하지만 생략가능");
  });
