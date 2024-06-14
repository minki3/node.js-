const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt", { highWaterMark: 16 });

const data = [];
readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log(chunk, chunk.length);
});

readStream.on("end", () => {
  console.log(Buffer.concat(data).toString());
});

//스트림 방식이 메모리 효율 관리에서는 좋음
