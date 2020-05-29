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
        var rootRef = firebase.database().ref().child("officials");

        rootRef.on("child_added", snap => {
            var Fname = snap.child("fname").val();
            var Lname = snap.child("lname").val(); 
            var Position = snap.child("position").val();
            //var School = snap.child("sc").val();
            var Email = snap.child("mail").val();
            var number = snap.child("number").val();

            $("#table_body").append("<tr><td>"+ Fname + " " + Lname+"</td><td>"+ Position +"</td><td>"+ Email +"</td><td>"+number+"</td><td><button type='button' class='btn btn-primary' style='background-color: #2196F3; color: white;'>Approve</button> <br> <button type='button' class='btn btn-primary' style='background-color: #2196F3; color: white;'>Disapprove</button></td></tr>");

        });
  });