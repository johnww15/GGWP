//* require block
require("dotenv").config();
// connect to mongoDB here
require("./config/database");

const express = require("express");
const path = require("path");
const logger = require("morgan");

// routers
const usersRouter = require("./routes/usersRouter");
const postsRouter = require("./routes/postsRouter");
const biosRouter = require("./routes/biosRouter");
const friendsRouter = require("./routes/friendsRouter");

//express app
const app = express();

//* middleware block
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

app.use(require("./config/checkToken"));
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/bio", biosRouter);
app.use("/api/friends", friendsRouter);

//this acts as a catch all function and must be at the very end after all other functions
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

//* listen block
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
