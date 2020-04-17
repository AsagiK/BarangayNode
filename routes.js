var express = require('express');
var SessCtrl = require('./controllers/Sessioncontroller');
var router = express.Router();

router.route('/RegistrationForm').get(SessCtrl.RegistrationForm);

module.exports = router;