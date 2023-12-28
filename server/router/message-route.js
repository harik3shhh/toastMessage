const express = require('express');
const messageMe = require('../controllers/message-controller');
const validate = require("../middlewares/validate-middleware");
const {sendSchema} = require("../validators/auth-validator");
const router = express.Router();




// router.route('/message').post(validate(sendSchema), messageMe);
router.route('/message').post(messageMe);

module.exports = router;