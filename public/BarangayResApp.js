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

  $(document).ready(function() {
        var rootRef = firebase.database().ref().child("household");

        rootRef.on("child_added", snap => {
            var Email = snap.child("mail").val();
            var Unit = snap.child("unit").val();
            var Street = snap.child("street").val();
            var Barangay = snap.child("barangay").val();
            var City = snap.child("city").val();
            var Postal = snap.child("postal").val();

            $("#table_body1").append("<tr><td>"+ Email+"</td><td>"+Unit+" </td><td>"+Street+"</td><td> "+Barangay+" </td><td>"+City+"</td><td>"+Postal+"</td><td><button onclick='Comment1()' id='addComm' class='btn btn-primary'>Add Comments</button></td></tr>");

            
        });
  });

  function Comment1(){
    window.location.href="/Comment1";
    
} 