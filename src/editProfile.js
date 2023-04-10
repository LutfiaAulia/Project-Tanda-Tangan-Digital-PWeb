const express = require('express');
const User = require('../modules/users');

const router = express.Router();

router.post('/editprofile/:id', async (req, res) => {
  const { id } = req.params;
  const { username, email, password, sign_img, active } = req.body;
  const updated_at = new Date();

  try {
    const user = await User.update({
      username,
      email,
      password,
      sign_img,
      active,
      updated_at,
    }, {
      where: {
        id,
      },
    });

    const response = {
      message: `Profile with id ${id} successfully updated`,
      data: user,
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