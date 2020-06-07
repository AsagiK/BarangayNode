var express = require('express');
var SessCtrl = require('./controllers/Sessioncontroller');
var BrgyCtrl = require('./controllers/Barangaycontroller');
var router = express.Router();

//
router.route('/RegistrationBarangay').get(SessCtrl.RegistrationBarangay);
router.route('/RegisterUser').post(SessCtrl.RegisterUser);
//
router.route('/CreateNewService').get(BrgyCtrl.CreateNewService); 
router.route('/ClericalAssesment').get(BrgyCtrl.ClericalAssesment);
router.route('/ApprovalPage').get(BrgyCtrl.ApprovalPage);
router.route('/Dashboard').get(BrgyCtrl.Dashboard);
router.route('/Login').get(BrgyCtrl.Login);
module.exports = router;