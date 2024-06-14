const { isMainThread, Worker, parentPort } = require("worker_threads");

if (isMainThread) {
  const worker = new Worker(__filename);

  worker.on("message", (value) => {
    console.log("워커로부터", value);
  });
  worker.on("exit", () => console.log("end"));
  worker.postMessage("ping");

  // 메인스레드
} else {
  // 워커스레드

  parentPort.on("message", (value) => {
    console.log("메인스레드로부터", value);
    parentPort.postMessage("pong");
    parentPort.close();
  });
}
