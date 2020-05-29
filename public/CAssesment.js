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
        var rootRef = firebase.database().ref().child("citizens");

        rootRef.on("child_added", snap => {
            var Fname = snap.child("f_name").val();
            var Lname = snap.child("l_name").val(); 
            var School = snap.child("sc").val();
            var Email = snap.child("mail").val();
            var number = snap.child("number").val();
            var GProgram = snap.child("gp").val();
            var HIssues = snap.child("hi").val();

            $("#table_body").append("<tr><td>"+ Fname + " " + Lname+"</td><td>"+ School +"</td><td>"+ Email +"</td><td>"+number+"</td><td>"+GProgram+"</td><td>"+HIssues+"</td></tr>");

        });
  });