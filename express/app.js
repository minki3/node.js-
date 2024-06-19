const express = require("express");
const catRouter = require("./router/cat");
const dogRouter = require("./router/dog");
const soundRouter = require("./router/sound");
const nameRouter = require("./router/patName");
const getAnimal = require("./router/getAnimal");
const postAnimal = require("./router/postAnimal");
const searchAnimal = require("./router/searchAnimal");
const deleteAnimal = require("./router/deleteAnimal");
const getUser = require("./router/getUser");
const getUserPOST = require("./router/searchPost");
const createPost = require("./router/createPost");

const app = express();
const port = 8080;
const cors = require("cors");

const { sequelize } = require("./models");

const corsOption = {
  origin: "http://localhost:3000", // 이 도메인만 허용
  credentials: true,
}; // cors옵션

sequelize
  .sync()
  .then(() => console.log("데이터 베이스 연결 성공"))
  .catch((err) => console.error("연결 실패", err));

app.use(cors(corsOption));

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", catRouter);
app.use("/", dogRouter);
app.use("/", soundRouter);
app.use("/", nameRouter);
app.use("/", getAnimal);
app.use("/", postAnimal);
app.use("/", searchAnimal);
app.use("/", deleteAnimal);
app.use("/", getUser);
app.use("/", getUserPOST);
app.use("/", createPost);
app.listen(port, () => {
  console.log(`${port} 에서 대기중`);
});
