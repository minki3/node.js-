const timeout1 = setTimeout(() => console.log("실행 x"), 5000);

const timeout2 = setTimeout(() => console.log("2초 후 실행"), 2000);

const interval = setInterval(() => console.log("1초마다 실행"), 1000);

setTimeout(() => {
  clearTimeout(timeout1);
  clearInterval(interval);
}, 4000);
