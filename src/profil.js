const express = require('express');
const User = require('../modules/users');

const router = express.Router();

router.get('/profile/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    res.status(200).json(user);
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
