const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../modules/users");

router.post("/login", async (req, res) => {
  try {
    const user = await User.findAll({ 
        where: { email: req.body.email } });
    if (!user) {
      return res.status(400).json({ message: "Email tidak ditemukan" });
    }
    const wrongMatchPass = await bcrypt.compare(req.body.password, user[0].password);
    if (wrongMatchPass) return res.status(400).json({ message: "Password salah" });
    const userId = user[0].id;
    const username = user[0].username;
    const email = user[0].email;
    const accessToken = jwt.sign({ userId, username, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '30s'
    });
    const refreshToken = jwt.sign({ userId, username, email }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '20h'
    });
    await User.update({refresh_token: refreshToken},{
        where:{
            id:userId
        }
    });
    res.cookie('refreshToken', refreshToken,{
        httpOnly: true,
        maxAge: 24 * 60 * 60 *1000
    });
    res.json({ message: "Berhasil login", accessToken});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan" });
  }
});

module.exports = router;