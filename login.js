function openLogin() {

    window.location.href = "login.html";

}


function showSignup() {

    window.location.href = "signup.html";

}


function showLogin() {

    window.location.href = "login.html";

}


function goBack() {

    window.location.href = "index.html";

}


function signup() {

    const name = document.getElementById("signupName").value;

    const email = document.getElementById("signupEmail").value;

    const password = document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (name === "" || email === "" || password === "") {

        alert("Please fill all fields.");

        return;

    }


    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;

    }


    localStorage.setItem("qrName", name);

    localStorage.setItem("qrEmail", email);

    localStorage.setItem("qrPassword", password);


    alert("Account created successfully!");

    window.location.href = "login.html";

}


function login() {

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;


    const savedEmail =
        localStorage.getItem("qrEmail");

    const savedPassword =
        localStorage.getItem("qrPassword");


    if (email === savedEmail && password === savedPassword) {

        alert("Login successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid email or password.");

    }

}