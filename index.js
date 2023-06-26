const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./config/database");
const cors = require('cors');
const registerRouter = require("./src/register");
const profileRouter = require("./src/profil");
const loginRouter = require("./src/login");
const editProfileRouter = require("./src/editProfile");
const logoutRouter = require("./src/logout");
const submissRouter = require("./src/submisdoc");
const usernameRouter = require("./src/username");
const tokenRouter = require("./src/tokens");

dotenv.config();
const app = express();
const port = 3000;
app.use(cors({
  exposedHeaders: 'Authorization',
}));

// Activate body-parser middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


async function startServer() {
  try {
    await db.authenticate();
    console.log("Database Connected");
    app.listen(port, () => console.log(`Server running at port ${port}`));
  } catch (error) {
    console.error(error);
  }
}
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", registerRouter);
app.use("/", profileRouter);
app.use("/", loginRouter);
app.use("/", editProfileRouter);
app.use("/", logoutRouter);
app.use("/", submissRouter);
app.use("/", usernameRouter);
app.use("/", tokenRouter);
startServer();
