import { APP_NAME, hello, Figure } from "./myutil";
import './style.css'
import picture from './images/bird.jpg'
import jsonData from './sample.json'
import csv from './sample.csv'

// window.addEventListener('DOMContentLoaded', function(){
//   let img = new Image();
//
//   img.src = picture;
//   document.body.appendChild(img);
// }, false);

console.log(jsonData[0].id);
// console.log(jsonData[0].title);
// console.log(jsonData[0].quantity);

console.log(csv[0][1]);
console.log(csv[0][2]);
