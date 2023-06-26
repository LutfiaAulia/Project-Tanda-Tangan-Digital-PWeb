const express = require("express");
const router = express.Router();
const Dokumen = require("../modules/doc");
const multer = require("multer");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const Token = require("../modules/token");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  try {
    const foundToken = await Token.findOne({
      where: { token: token },
    });

    if (!foundToken) {
      return res.sendStatus(403);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userUploadDir = `uploads/${req.user.userId}/`;
    if (!fs.existsSync(userUploadDir)) {
      fs.mkdirSync(userUploadDir, { recursive: true });
    }
    cb(null, userUploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/submiss",
  authenticateToken,
  upload.single("file"),
  async (req, res) => {
    try {
      const { university, faculty, address, destination, description } = req.body;

      const dokumen = await Dokumen.create({
        university,
        faculty,
        address,
        destination,
        description,
        user_id: req.user.userId,
      });

      res.status(201).json({ dokumen });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Terjadi kesalahan saat mengunggah dokumen." });
    }
  }
);

module.exports = router;
