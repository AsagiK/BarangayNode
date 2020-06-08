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

  var con = firebase.database().ref('locClearApp');

  document.getElementById('community-tax-form').addEventListener("submit", (e) => {
      e.preventDefault();
      
      var officialInfo = con.push();
      
      officialInfo.set({

        applicantName: getId("name"),
        address: getId("address"),
        citizenship: getId("citizenship"),
        gender: getId("sex"),
        civilStatus: getId("status"),
        birthDate: getId("birthdate"),
        birthPlace: getId("birthplace"),
        weight: getId("weight"),
        height: getId("height"),
        occupation: getId("occupation"),
        receipts: getId("receipts"),
        earnings: getId("earnings"),
        income: getId("income"),
        tinNo: getId("tin"),

      });
      alert("Sent");
      console.log("Sent Successful to DB");
      document.getElementById("community-tax-form").reset();
  }); 

  function getId(id){
      return document.getElementById(id).value;
  }