const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../modules/users');
const Token = require('../modules/token');

const router = express.Router();

router.post('/editprofile', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const tokenData = await Token.findOne({ where: { token }, include: User });

    if (!tokenData) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    if (decodedToken.userId !== tokenData.UserId) {
      return res.status(401).json({ message: 'Token does not match user' });
    }

    const { username, email, password, sign_img, active } = req.body;
    const updated_at = new Date();

    const updatedUser = await User.update(
      {
        username,
        email,
        password,
        sign_img,
        active,
        updated_at,
      },
      {
        where: {
          id: decodedToken.userId,
        },
      }
    );

    const response = {
      message: `Profile with id ${decodedToken.userId} successfully updated`,
      data: updatedUser,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    const response = {
      message: 'Failed to update profile',
      error: err,
    };
    res.status(500).json(response);
  }
});

module.exports = router;