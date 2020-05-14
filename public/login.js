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

  const auth = firebase.auth(); 

  function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    window.location.href="Dashboard.ejs";

  } 

  function signOut(){
      auth.signOut();
      alert("Logged Out");
      
  } 

  var user = firebase.auth().currentUser;

  auth.onAuthStateChanged(function(user){  
       if(user){
           var email = user.email;
           
           alert("Logged In " + email);
           console.log(email);
           

           // is signed up
       }else {

        alert("No active user" );
           // no user is signed in
       }
  });