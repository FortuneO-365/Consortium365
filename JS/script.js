let header = document.getElementById("header");
let main = document.getElementById("main");
let footer = document.getElementById("footer");
let up = document.getElementById("up");
let navButton = document.getElementById("nav-button");
let secNav = document.getElementById("sec-nav");
let spanPart = document.querySelector(".span");

let popups = document.getElementsByClassName("form");
let form = document.querySelector("#form");
let login = document.querySelector("#login");
let login2 = document.getElementById("loginB");
let email = document.getElementById("email");
let password = document.getElementById("password");

let signUpButton = document.getElementById("signup");
let signinButton = document.getElementById("signin");

let signUp = document.getElementById("form1");
let userFirstName = document.getElementById("Fname")
let userLastName = document.getElementById("Lname")
let userEmail = document.getElementById("email1")
let userPassword = document.getElementById("password1")
let confirmPassword = document.getElementById("Cpassword");
let createAccount = document.getElementById("signup-button");



/* Back to top arrow */

document.onscrollend = function(){
    up.classList.add("visible");
    setTimeout(removeUp, 3000);
}

up.addEventListener("click",function(e){
    if(e.target.tagName === "A"){
        up.classList.remove("visible");
    }
},false);

function removeUp(){
    up.classList.remove("visible");
}

/* Login and SignUp popup */

login.onclick = function(){
    form.classList.add("show"); 
    main.style.opacity = ".5";
    header.style.opacity = ".5";
    footer.style.opacity = ".5";
}

login2.onclick = function(){
    form.classList.add("show"); 
    main.style.opacity = ".5";
    header.style.opacity = ".5";
    footer.style.opacity = ".5";
    navButton.classList.remove("newButton");
    navButton.classList.add("nav-button");
    secNav.style.display = "none"
}

signUpButton.onclick = function(){
    form.classList.remove("show"); 
    signUp.classList.add("show"); 
    main.style.opacity = ".5";
    header.style.opacity = ".5";
    footer.style.opacity = ".5";
}

signinButton.onclick = function(){
    form.classList.add("show"); 
    signUp.classList.remove("show"); 
}

/* Remove Login and SignUp popup */

document.addEventListener("click", e => {
    if(!form.contains(e.target) && e.target !== login && e.target !== login2 && !signUp.contains(e.target) && e.target !== signUpButton){
        form.classList.remove("show");
        main.style.opacity = "1";
        header.style.opacity = "1";
        footer.style.opacity = "1"; 
        signUp.classList.remove("show");
        password.value = "";
        email.value ="";
    }
})

/* Login */

function linkPage(link){
    if(email.value == "" && password.value == ""){
        form.classList.add("error1");
        form.classList.add("error2");
    }else if(email.value == ""){
        form.classList.add("error1");

        pwds = /[a-z]{1,30}/g;
        test = pwds.test(password.value);
        if(!test){
            form.classList.add("error2");
            document.getElementById('password-error').innerText = "Password must contain lowercase Letter";
            password.value = "";
        }else{
            let code = password.value;
            if (code.length < 8) {
                form.classList.add("error2");
                document.getElementById('password-error').innerText = "Password must have at least 8 characters";
                password.value = "";
            } else if(code.length > 30){
                form.classList.add("error2");
                document.getElementById('password-error').innerText = "Password must not exceed 30 characters";
                password.value = "";
            }
            else{
                form.classList.remove("error2");
            }
        }
        // document.getElementById('password-error').style.display = "none";
    }else if(password.value == ""){
        form.classList.add("error2");
        // document.getElementById('email-error').style.display = "none";
    }else{
        let pwds = /[A-Z]{1,30}/g;
        let test = pwds.test(password.value);
        if(!test){
            document.getElementById('password-error').innerText = "Password must contain uppercase Letter";
            password.value = "";
            form.classList.add("error2");
            
        }else{
            form.classList.add("error2");
            pwds = /[a-z]{1,30}/g;
            test = pwds.test(password.value);
            if(!test){
                document.getElementById('password-error').innerText = "Password must contain lowercase Letter";
                password.value = "";
            }else{
                let code = password.value;
                if (code.length < 8) {
                    form.classList.add("error2");
                    document.getElementById('password-error').innerText = "Password must have at least 8 characters";
                } else if(code.length > 30){
                    form.classList.add("error2");
                    document.getElementById('password-error').innerText = "Password must not exceed 30 characters";
                }else{
                    location.href = link.value;
                }
            }
        }
    }
}

/*Sign Up */

// createAccount.onclick = function(){
    
// }



/* Responsive navigation */

navButton.addEventListener("click", function(){
    if(navButton.className === "nav-button"){
        navButton.classList.remove("nav-button");
        navButton.classList.add("newButton");
        secNav.style.display = "block"
    }else{
        navButton.classList.remove("newButton");
        navButton.classList.add("nav-button");
        secNav.style.display = "none"
    }
});
