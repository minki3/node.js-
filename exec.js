const { exec } = require("child_process");

const process = exec("dir");

process.stdout.on("data", function (data) {
  console.log(data);
});
