//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
//Manera en la he conseguido hacer el contador, Ahora voy a intentar simplificarlo
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;
setInterval(function () {
    const number1 = counter1 % 10;
    const number2 = Math.floor(counter2 / 10) % 10;
    const number3 = Math.floor(counter3/ 100) % 10;
    const number4 = Math.floor(counter4 / 1000) % 10;
    const number5 = Math.floor(counter5 / 10000) % 10;
    const number6 = Math.floor(counter6 / 100000) % 10;
    counter1++,counter2++,counter3++,counter4++,counter5++,counter6++;
    ReactDOM.render(<Home 
        digito1 = {number1} 
        digito2 = {number2} 
        digito3 = {number3} 
        digito4 = {number4}
        digito5 = {number5} 
        digito6 = {number6}
        />, document.querySelector("#app"));
}, 1000);

//render your react application

