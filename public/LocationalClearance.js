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

  document.getElementById('loc-clear-form').addEventListener("submit", (e) => {
      e.preventDefault();
      
      var officialInfo = con.push();
      
      officialInfo.set({

        brandName: getId("bname"),
        busNature: getId("nature"),
        location: getId("location"),
        applicantName: getId("name"),
        address: getId("address"),
        authRep: getId("rep"),
        gender: getId("sex"),
        natureOfApp: getId("appnature"),
        unitNo: getId("unitno"),
        floorNo: getId("floorno"),
        lotArea: getId("lotarea"),
        totalArea: getId("totalarea"),
        floorArea: getId("floorarea"),
        capitalization: getId("cap"),
        maleEmp: getId("memp"),
        femEmp: getId("femp"),
        owner: getId("owner"),
        leaser: getId("lease"),
        leaseRate: getId("leaserate"),

      });
      alert("Sent");
      console.log("Sent Successful to DB");
      document.getElementById("loc-clear-form").reset();
  }); 

  function getId(id){
      return document.getElementById(id).value;
  }