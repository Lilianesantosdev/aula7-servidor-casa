const express  = require('express');
const router = express.Router();
const controller = require("../controller/mulheresController");


router.get ("/", controller.getAll);
router.get("/mulheres", controller.getAll);

module.exports = router;