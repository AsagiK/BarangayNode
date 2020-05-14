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

  var con = firebase.database().ref('officials');
  
  const auth = firebase.auth();

  document.getElementById('form').addEventListener("submit", (e) => {
      e.preventDefault();
      
      var officialInfo = con.push();
      alert("Sent");
      officialInfo.set({
        fname: getId("fname"),
        lname: getId("lname"),
        contact: getId("contact"),
        position: getId("position"),
        email: getId("email"),
        password: getId("password")
      });
     
      console.log("Sent Successful to DB");
      document.getElementById("form").reset();
  }); 

  function getId(id){
      return document.getElementById(id).value;
  } 
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Account Creation Successful")
  }