const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../modules/users");
const Token = require("../modules/token");

router.get("/logout", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const userId = decodedToken.userId;

      const user = await User.findOne({ where: { id: userId } });
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "Pengguna tidak ditemukan" });
      }

      user.active = 0;
      await user.save();

      await Token.destroy({ where: { token } });

      return res
        .status(200)
        .json({ success: true, message: "Berhasil logout" });
    } catch (error) {
      console.error(error);
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Terjadi kesalahan" });
  }
});

module.exports = router;
