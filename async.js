const fs = require("fs");

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw new Error(err);
  }
  console.log("1 번", data.toString());
});
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw new Error(err);
  }
  console.log("2 번", data.toString());
});
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw new Error(err);
  }
  console.log("3 번", data.toString());
});
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw new Error(err);
  }
  console.log("4 번", data.toString());
});
