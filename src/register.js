const express = require('express');
const router = express.Router();
const User = require('../modules/users');

router.get('/', (req, res, next) => {
  User.findAll().then((users) => {
    res.json(users);
  });
});

router.post('/register', async (req, res, next) => {
  const { username, email, password, sign_img, active } = req.body;
  const created_at = new Date();
  const updated_at = new Date();

  try {
    const user = await User.create({
      username,
      email,
      password,
      sign_img,
      active,
      created_at,
      updated_at,
    });

    const response = {
      message: 'User created successfully',
      data: user,
    };

    res.json(response);
  } catch (err) {
    console.log(err);
    const response = {
      message: 'Failed to create user',
      error: err,
    };
    res.status(500).json(response);
  }
});

module.exports = router;
