const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const timeStamp = new Date().getTime();
    const fileName = file.originalname;

    cb(null, `${timeStamp}-${fileName}`);
  },
});

const uploadFile = multer({
  storage,
  limits: {
    fileSize: 5 * 1000 * 1000, // 5 MB
  },
});

module.exports = uploadFile;
