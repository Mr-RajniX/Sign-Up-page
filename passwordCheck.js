function verifyPassword() {
    var pw = document.getElementById("pswd").value;
    var pw1 = document.getElementById("confirmpassword").value;
    if (pw == "") {
        document.getElementById("message").innerHTML = "**Fill the password please!";
        return false;
    } 
    if (pw != pw1) {
        document.getElementById("message").innerHTML = "**Password Mismatch!";
        return false;
    }
    if (pw.length < 8) {
        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }
    if (pw.length > 15) {
        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    } 
    else {
        alert("Registration Successfull");
    }
} 