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

  var con = firebase.database().ref('pwdApp');

  document.getElementById('pwd-form').addEventListener("submit", (e) => {
      e.preventDefault();
      
      var officialInfo = con.push();
      
      officialInfo.set({

        fname: getId("fname"),
        lname: getId("lname"),
        mname: getId("mname"),
        distype: getId("distype"),
        address: getId("add"),
        tno: getId("tno"),
        mno: getId("mno"),
        email: getId("email"),
        birth:getId("bdate"),
        gender: getId("sex"),
        bloodType: getId("btype"),
        civStatus: getId("cstatus"),
        eduAttain: getId("eattain"),
        eduStatus:getId("estatus"),
        eduNature:getId("enature"),
        eduType: getId("etype"),
        skillType: getId("typeskill"),
        sssNo: getId("sssno"),
        gsisNo: getId("gsisno"),
        philHealthNo: getId("phealthno"),
        philHealthType: getId("phealthtype"),
        orgAffiliated: getId("orgaff"),
        contactPerson: getId("cperson"),
        officeAdd: getId("offaddress"),
        orgTelNo: getId("orgtelno"),

      });
      alert("Sent");
      console.log("Sent Successful to DB");
      document.getElementById("pwd-form").reset();
  }); 

  function getId(id){
      return document.getElementById(id).value;
  }