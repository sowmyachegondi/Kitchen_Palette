function signup(){

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    let confirm =
        document.getElementById("confirm").value;

    if(password.length < 8){
        alert("Password must contain 8 characters");
        return;
    }

    if(password !== confirm){
        alert("Passwords do not match");
        return;
    }

    localStorage.setItem("email",email);
    localStorage.setItem("password",password);

    alert("Registration Successful");

    window.location.href="login.html";
}

function login(){

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    let savedEmail =
        localStorage.getItem("email");

    let savedPassword =
        localStorage.getItem("password");

    if(email === savedEmail &&
       password === savedPassword){

        alert("Login Successful");

        window.location.href="home.html";
    }
    else{

        alert("Invalid Email or Password");

    }
}