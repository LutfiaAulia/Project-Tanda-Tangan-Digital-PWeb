const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../modules/users");
const Token = require("../modules/token");
const { authenticateToken } = require("../src/auth");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Email tidak ditemukan" });
    }
    const isMatch = crypto.timingSafeEqual(
      Buffer.from(password, "utf-8"),
      Buffer.from(user.password, "utf-8")
    );
    if (isMatch) {
      user.active = 1;
      await user.save();
      const accessToken = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );

      const tokenData = {
        token: accessToken,
        UserId: user.id,
      };

      const token = await Token.create(tokenData);
      if (!token) {
        return res
          .status(500)
          .json({ success: false, message: "Gagal menyimpan token" });
      }

      return res.json({
        success: true,
        message: "Berhasil login",
        accessToken,
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Password salah" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, message: "Password tidak sesuai" });
  }
});

router.get("/protected", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(400).json({ message: "User tidak ditemukan" });
    }

    return res.json({
      success: true,
      message: "Berhasil mengakses data yang terlindungi",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ success: false, message: "Terjadi kesalahan" });
  }
});

module.exports = router;
