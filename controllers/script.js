let SubmitButtonReg = document.getElementById("SubmitButtonReg");

SubmitButtonReg.addEventListener("click", function () {

    //get the value from forms 

    let Fname = document.getElementById("first-name").value;

    let Lname = document.getElementById("lastname").value; 

    let Contact = document.getElementById("contact").value; 

    let Email = document.getElementById("email").value;

    let Password = document.getElementById("password").value;

        var data = {
            Fname: Fname,
            Lname: Lname,
            Contact: Contact,
            Email: Email,
            Password: Password
        } 

        var database = firebase.database(); // gets the database 

        var ref = database.ref("officials");

        ref.push(data);
    
})