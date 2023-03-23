const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();
const path = require("path");
const port = 3000;

/* set 라우터 */
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

app.set("port", process.env.PORT || port);

app.use(morgan("dev"));

app.use("/", indexRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
