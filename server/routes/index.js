const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.json({
    msg: "Autoškola Jiří Jiráček API běží.",
  });
});

module.exports = router;
