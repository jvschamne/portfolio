var i = 0;
var texto = 'Olá, sou João Victor Schamne, desenvolvedor Front-end!';
var speed = 70; /* velocidade em milisegundos*/

const navItem1 = document.querySelector("#nav-item1")
const navItem2 = document.querySelector("#nav-item2")
const navItem3 = document.querySelector("#nav-item3")
const navItem4 = document.querySelector("#nav-item4")
const navItem5 = document.querySelector("#nav-item5")

function digitador() {
    if (i < texto.length) {
        document.getElementById("titulo").innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitador, speed);
    }
}

digitador()


navItem1.onclick = () => {
    console.log("ok")
    var elmntToView = document.getElementById("secao1");
    elmntToView.scrollIntoView();
}

navItem2.onclick = () => {
    console.log("ok")
    var elmntToView = document.getElementById("secao2");
    elmntToView.scrollIntoView();
}

navItem3.onclick = () => {
    console.log("ok")
    var elmntToView = document.getElementById("secao3");
    elmntToView.scrollIntoView();
}

navItem4.onclick = () => {
    console.log("ok")
    var elmntToView = document.getElementById("secao4");
    elmntToView.scrollIntoView();
}
navItem5.onclick = () => {
    console.log("ok")
    var elmntToView = document.getElementById("secao5");
    elmntToView.scrollIntoView();
}