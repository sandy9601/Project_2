const express = require('express');
const router = express.Router(); 
const collegeController = require("../Controllers/CollegeController");
const internController = require("../Controllers/InternController");



router.post("/functionup/colleges",collegeController.createCollege);

router.post("/functionup/interns",internController.createIntern);

router.get("/functionup/collegeDetails", collegeController.getCollege);


module.exports = router


