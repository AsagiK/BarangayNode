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
var admin = require("firebase-admin");

var serviceAccount = require("./credentials/service.json");



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://barangay-system-prototype.firebaseio.com"
});
//---------

server.get('/', function (req, resp) {
    resp.send("Hello world")
    var db = admin.database();
    var ref = db.ref("testing");
    var usersRef = ref.child("users");
    usersRef.set({
        brian: {
            full_name: "Brian De Castro"
        },
        charles: {
            full_name: "Charles Cu"
        },
        gio: {
            full_name: "Gio Bueza"
        },
        jericho: {
            full_name: "Jericho Mendoza"
        }
    });
});


server.get('/*', function (req, resp) {
    resp.send('Error');
});

const port = process.env.PORT | 9090;
console.log("Server listening at port " + port);
var serverclose = server.listen(port);
