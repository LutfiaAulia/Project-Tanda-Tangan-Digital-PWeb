const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../modules/users');
const Token = require('../modules/token');

const router = express.Router();

router.get('/profile', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const tokenData = await Token.findOne({ where: { token }, include: User });

    if (!tokenData) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    if (decodedToken.userId !== tokenData.UserId) {
      return res.status(401).json({ message: 'Token does not match user' });
    }

    const { id, email, fullname, birthPlace, nik, gender, phoneNumber, dateOfBirth } = tokenData.User;
    const userProfile = {
      id,
      email,
      fullname,
      birthPlace,
      nik,
      gender,
      phoneNumber,
      dateOfBirth,
    };

    res.status(200).json({ user: userProfile });
  } catch (err) {
    console.log(err);
    const response = {
      message: 'Failed to get user profile',
      error: err,
    };
    res.status(500).json(response);
  }
});

module.exports = router;