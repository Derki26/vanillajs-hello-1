/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function excuse(){

  let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'the keys', 'the car'];
  let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
  
  function randomElement(array){
  return array[Math.floor(Math.round(Math.random() * array.length))];
  }

  let excuse = randomElement(who) + 
  " " +
  randomElement(action) +
  " " + 
  randomElement(what) +
  " " +
  randomElement(when);

  console.log(excuse);
  
  const pElement = document.getElementsByTagName("p")
  
  pElement[0].innerText = excuse;
  
  console.log(pElement[0]); 

};
