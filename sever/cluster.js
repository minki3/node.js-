/**
 * cluster
 * 기본적으로 싱글 스레드인 노드가 cpu 코어를 모두 사용할 수 있게 해주는 모듈
 * 1. 포트를 공유하는 노드 프로세스를 여러개 둘 수 있다.
 * 2. 요청이 많이 들어왔을 때 병렬로 실행된 서버의 개수만큼 요청이 분산됨
 * 3. 서버에 무리가 덜 감
 * 4. 코어가 8개인 서버가 있을 때 : 보통은 코어 하나만 사용
 * 5. cluster로 코어 하나당 노드 프로세스 하나를 배정 가능
 * 6. 성능이 8배가 되는 것은 아니지만 개선됨
 * 단점
 * 1. 컴퓨터 자원(메모리, 세션 등) 공유 못함
 * Redis등 별도 서버로 해결
 */

const cluster = require("cluster");
const http = require("http");
const numCPU = require("os").cpus().length; //cpu의 갯수

if (cluster.isMaster) {
  console.log(`마스터 프로세스 아이디 : ${process.pid}`);
  console.log(numCPU);
  for (let i = 0; i < numCPU; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`서버 종료 ${worker.process.pid}`);
    cluster.fork(); // 서버가 종료되어도 새로운 서버를 만듦.
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200, { "content-type": "text/html, charset=utf-8" });
      res.write("<h1>hello node</h1>");
      res.end("<p>hello server</p>");
      setTimeout(() => {
        process.exit(1);
      }, 1000); // 워커의 존재를 하기 위해 1초마다 강제 종료
    })
    .listen(8086, () => {});
  console.log(`${process.pid}`);
}
