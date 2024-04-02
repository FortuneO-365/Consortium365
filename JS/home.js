let design = document.getElementById("design");
let learn = document.getElementById("learn");
let learnButton = document.getElementById("Learn-button");
let designButton = document.getElementById("Design-button");
var navButton1, navButton2, navButton3, navButton4, navButton5;
navButton1 = document.getElementById("spana1");
navButton2 = document.getElementById("spana2");
navButton3 = document.getElementById("spana3");
navButton4 = document.getElementById("spana4");
navButton5 = document.getElementById("spana5");
let subject1 = document.getElementById("subject1");
let subject2 = document.getElementById("subject2");
let subject3 = document.getElementById("subject3");
let subject4 = document.getElementById("subject4");
let subject5 = document.getElementById("subject5");

let hey , hello;

window.onload = function(){
    beVisible();
    navOne();
}

function beVisible(){
    clearTimeout(hey);
    design.classList.add("visible");
    designButton.classList.add("active");
    learn.classList.remove("visible");
    learnButton.classList.remove("active");
    hey = setTimeout(changeVisibility, 7000);   
}

function changeVisibility(){
    clearTimeout(hey);
    learn.classList.add("visible");
    learnButton.classList.add("active");
    design.classList.remove("visible");
    designButton.classList.remove("active");
    hey = setTimeout(beVisible, 7000)
}

learnButton.onclick = function(){
    changeVisibility();
}

designButton.onclick = function(){
    beVisible();
}

function navOne(){
    clearTimeout(hello);
    navButton5.classList.remove("active");
    navButton1.classList.add("active");
    hello = setTimeout(navTwo, 3000);
}

function navTwo(){
    clearTimeout(hello);
    navButton1.classList.remove("active");
    navButton2.classList.add("active");
    hello = setTimeout(navThree, 3000);
}

function navThree(){
    clearTimeout(hello);
    navButton2.classList.remove("active");
    navButton3.classList.add("active");
    hello = setTimeout(navFour, 3000);
}

function navFour(){
    clearTimeout(hello);
    navButton3.classList.remove("active");
    navButton4.classList.add("active");
    hello = setTimeout(navFive, 3000);
}

function navFive(){
    clearTimeout(hello);
    navButton4.classList.remove("active");
    navButton5.classList.add("active");
    hello = setTimeout(navOne, 3000);
}
