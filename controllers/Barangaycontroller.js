const express = require('express');
const fileUpload = require('express-fileupload');
const server = express();
var session = require('express-session');
// ---- DEFINE SESSION
server.use(session({
    secret: 'zzzzzzz',
    resave: false,
    saveUninitialized: true
}));
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));
server.use(fileUpload({
    createParentPath: true,
    safeFileNames: true,
    preserveExtension: 10
}));

server.set('view engine', 'ejs');
var admin = require("firebase-admin");

var serviceAccount = require("../credentials/service.json");


//---------
module.exports = {
    
    CreateNewService: function (req, resp) {
        resp.render('./pages/CreateNewService.ejs')

    }, 

    ClericalAssesment: function (req, resp) {
        resp.render('./pages/ClericalAssesment.ejs')

    }, 

    ApprovalPage: function (req, resp) {
        resp.render('./pages/ApprovalPage.ejs')

    }, 

    Dashboard: function (req, resp) {
        resp.render('./pages/Dashboard.ejs')

    }, 

    Login: function (req, resp) {
        resp.render('./pages/Login.ejs') 

    }, 
}
