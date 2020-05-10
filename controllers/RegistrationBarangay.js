$(document).ready(function() { 



    var firebaseConfig = {
        apiKey: "AIzaSyDPXz5QOmaWCwWgioGhSi7l5Ly8B65QI40",
        authDomain: "barangay-system-prototype.firebaseapp.com",
        databaseURL: "https://barangay-system-prototype.firebaseio.com",
        projectId: "barangay-system-prototype",
        storageBucket: "barangay-system-prototype.appspot.com",
        messagingSenderId: "566256026098",
        appId: "1:566256026098:web:92e32edafce218d4d62b6b",
        measurementId: "G-2B5VFRF4HM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics(); 
    
    var Auth = firebase.auth();
    var database = firebase.database();
    var officialsDb = dbRef.collection("officials");
    var auth = null;

    $('#barangay-registration-form').on('submit',async function (e) {
        e.preventDefault();

        var data = {
            
                fname: $('first-name').val(),
                lname: $('lastname').val(),
                contact: $('contact').val(),
                email: $('email').val(),
                roles: $('roles').val(),
                password: $('password').val(),
            
        };

        console.log(data);
        await firebase.auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(function(user){
            console.log('uid',user.user.uid);
            officialsDb.doc(user.user.uid).set({
                'email': data.email, 'fname': data.fname,'lname': data.lname,
                'contact': data.contact, 'roles': data.roles, 'password': data.password,
            }) 
            .then(function(){
                console.log("Submitted");
                window.alert("Official Registrered");
                window.location.href = "RegistrationBarangay.php";
            })
            .catch(function(error){
                console.log("ERROR", error);

            });
        });;
           
       
    });

    function writeData() {
        firebase.database().ref("BarangayOfficials").push({
            FirstName: document.getElementById("first-name").value,
            LastName: document.getElementById("last-name").value,
            Contact: document.getElementById("contact").value,
            Email: document.getElementById("email").value,
            Password: document.getElementById("password").value
        });
    }
});



