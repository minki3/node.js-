const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan"); // 요청과 응답을 기록하는 라우터
const cookie_parser = require("cookie-parser"); // 쿠키를 자동으로 파싱
const session = require("express-session"); // 개인의 저장 공간 생성
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
// app.use("요청 경로", express.static("실제 경로"));
// app.use("/", express.static(__dirname, "public"));
app.use(cookie_parser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
    },
    name: "connect.sid",
  })
);
app.use(express.urlencoded({ extended: true })); // true 권장

app.use("/", indexRouter); // 라우터 분리
app.use("/user", userRouter);

app.use((req, res, next) => {
  console.log("모든 요청에 대한 실행");

  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
  console.log("hello minki"); // return이 아니기 때문에 실행이 된다.
}); // 한 라우터에서 여러번 보낼 수 없음. 요청한번에 응답 한번이 원칙.

app.post("/", (req, res) => {
  res.send("hello express");
});

app.get("/about", (req, res) => {
  res.send("hello express about");
});

app.get("/category/:name", (req, res) => {
  res.send(`hello ${req.params.name}`);
});

// app.get("*", (req, res) => {
//   console.log("hello everybody");
// }); // 모든 get 요청에 대한 라우터 처리

app.use((req, res, next) => {
  res.send("404");
}); // 4o4 처리

app.use((err, req, res, next) => {
  console.error(err);
  res.send("에러에러에러");
}); // 에러 미들웨어, 반드시 매개변수가 4개 있어야함.

app.listen(app.get("port"), () => {
  console.log("express 서버 실행");
});
