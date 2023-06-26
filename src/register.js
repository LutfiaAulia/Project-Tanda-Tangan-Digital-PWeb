const express = require("express");
const router = express.Router();
const User = require("../modules/users");

router.get("/", (req, res, next) => {
  User.findAll().then((users) => {
    res.json(users);
  });
});

router.post("/register", async (req, res, next) => {
  const { username, email, password, sign_img } = req.body;
  const created_at = new Date();
  const updated_at = new Date();
  const active = 0;

  if (!username || !email || !password) {
    const response = {
      message: "Username, email, and password are required",
    };
    return res.status(400).json(response);
  }

  try {
    const existingUserByUsername = await User.findOne({
      where: {
        username: username,
      },
    });

    const existingUserByEmail = await User.findOne({
      where: {
        email: email,
      },
    });

    if (existingUserByUsername || existingUserByEmail) {
      const error = "Username or email already exists";
      const response = {
        message: error,
        error: error,
      };
      return res.status(400).json(response);
    }

    const user = await User.create({
      username: username,
      email: email,
      password: password,
      sign_img: sign_img,
      active: active,
      created_at: created_at,
      updated_at: updated_at,
    });

    const response = {
      message: "User created successfully",
      data: user,
    };

    res.json(response);
  } catch (err) {
    console.log(err);
    const response = {
      message: "Failed to create user",
      error: err.message,
    };
    res.status(500).json(response);
  }
});

module.exports = router;
