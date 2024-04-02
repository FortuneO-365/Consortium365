var Talk1, Talk2, Talk3, Talk4;
Talk1 = document.getElementById("main-talk1");
Talk2 = document.getElementById("main-talk2");
Talk3 = document.getElementById("main-talk3");
Talk4 = document.getElementById("main-talk4");
let hello;

window.onload = function(){
    TalkOne();
}

function TalkOne(){
    Talk1.classList.add("main");
    Talk4.classList.remove("main");
    clearTimeout(hello);
    hello = setTimeout(TalkTwo, 9000);
}

function TalkTwo(){
    Talk2.classList.add("main");
    Talk1.classList.remove("main");
    clearTimeout(hello);
    hello = setTimeout(TalkThree, 9000);
}

function TalkThree(){
    Talk3.classList.add("main");
    Talk2.classList.remove("main");
    clearTimeout(hello);
    hello = setTimeout(TalkFour, 9000);
}

function TalkFour(){
    Talk4.classList.add("main");
    Talk3.classList.remove("main");
    clearTimeout(hello);
    hello = setTimeout(TalkOne, 9000);
}
