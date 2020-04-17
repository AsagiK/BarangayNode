var express = require('express');
var SessCtrl = require('./controllers/Sessioncontroller');
var router = express.Router();

router.route('/RegistrationForm').get(SessCtrl.RegistrationForm);
router.route('/RegisterUser').post(SessCtrl.RegisterUser);

module.exports = router;