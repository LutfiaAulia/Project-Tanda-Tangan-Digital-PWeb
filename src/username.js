const express = require("express");
const router = express.Router();
const User = require("../modules/users");

router.get("/username", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["username"],
    });

    const usernames = users.map((user) => user.username);
    res.json(usernames);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan saat mengambil data username." });
  }
});

module.exports = router;
