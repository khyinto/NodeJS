const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
let bodyParser = require("body-parser");

const app = express();
const path = require("path");
const port = 3000;

/* set 라우터 */
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

const loginRouter = require("./routes/login");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false, limit: "2mb" })); //파서(기본)
app.use(bodyParser.json()); //파서(json)

app.set("port", process.env.PORT || port);

app.use(morgan("dev"));

/*
app.use("/", indexRouter);
app.post("/", indexRouter);
*/

app.use("/users", userRouter);
app.post("/users", userRouter);

app.post("/users/login", loginRouter.Join); // 로그인

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
