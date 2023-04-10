const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./config/database");
const registerRouter = require("./src/register");
const profileRouter = require("./src/profil");
const loginRouter = require("./src/login");
const editProfileRouter = require("./src/editProfile")
const logoutRouter = require("./src/logout")

dotenv.config();
const app = express();
const port = 3000;

// Activate body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

async function startServer() {
  try {
    await db.authenticate();
    console.log("Database Connected");
    app.listen(port, () => console.log(`Server running at port ${port}`));
  } catch (error) {
    console.error(error);
  }
}

app.use("/", registerRouter);
app.use("/", profileRouter);
app.use("/", loginRouter);
app.use("/", editProfileRouter);
app.use("/", logoutRouter);

startServer();
