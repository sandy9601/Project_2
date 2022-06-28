const express = require('express')
const router = express.Router()
const collegeControll = require("../Controllers/CollegeController")
const interController = require("../Controllers/InternController")

router.post("/functionup/colleges", collegeControll.createCollege)
router.post("/functionup/interns", interController.createInter)

module.exports = router;