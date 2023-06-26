const express = require("express");
const router = express.Router();
const Token = require("../modules/token");

router.get("/token", async (req, res) => {
  try {
    const token = await Token.findOne({
      order: [["createdAt", "DESC"]],
    });

    if (!token) {
      return res.status(404).json({ message: "Token tidak ditemukan." });
    }

    res.send(token.token);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan dalam mengambil token." });
  }
});

module.exports = router;
