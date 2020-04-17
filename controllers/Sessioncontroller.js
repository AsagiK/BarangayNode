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
    
    RegistrationForm: function (req, resp) {
        resp.render('./pages/RegistrationBarangay.ejs')

    },
    
    RegisterUser: function(req,resp){
        console.log(req.body);
    }

}
