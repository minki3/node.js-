const fs = require("fs/promises");

fs.readFile("./readme.txt")
  .then((res) => console.log(res.toString()))
  .catch((err) => console.log(err));

fs.writeFile("./writeme.txt", "저를 읽어주세요")
  .then(() => fs.readFile("./writeme.txt"))
  .then((res) => console.log(res.toString()))
  .catch((err) => console.log(err));
