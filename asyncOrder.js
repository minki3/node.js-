const fs = require("fs/promises");

async function main() {
  try {
    let data = await fs.readFile("./readme.txt");
    console.log("1번", data.toString());
    data = await fs.readFile("./readme.txt");
    console.log("2번", data.toString());
    data = await fs.readFile("./readme.txt");
    console.log("3번", data.toString());
    data = await fs.readFile("./readme.txt");
    console.log("4번", data.toString());
  } catch (err) {
    throw new Error(err);
  }
}

main();

// async를 사용하면 순서도 보장되고 비동기 방법으로 처리 가능.
