import { APP_NAME, hello, Figure } from "./myutil";
import './style.css'
import picture from './images/houseum.jpg'
import jsonData from './sample.json'
import csv from './sample.csv'
import html from './sample.html'
import xml from './sample.xml'

// window.addEventListener('DOMContentLoaded', function(){
//   let img = new Image();
//
//   img.src = picture;
//   document.body.appendChild(img);
// }, false);

// console.log(jsonData[0].id);
// console.log(jsonData[0].title);
// console.log(jsonData[0].quantity);

// console.log(csv[0][1]);
// console.log(csv[0][2]);
//
// console.log(html);

// <data>要素配下の0番目の<row>要素
console.log(xml.data.row[0]);

// <data>要素配下の1番目の<row>要素のid属性
console.log(xml.data.row[1].$.id);

// <data>要素配下の2番目の<row>要素の本体テキスト
console.log(xml.data.row[2]._);
