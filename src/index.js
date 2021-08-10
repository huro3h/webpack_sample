import { APP_NAME, hello, Figure } from "./myutil";
import './style.css'

let body = document.getElementsByTagName('body')[0];
body.classList.add('sky');

console.log(APP_NAME);
// hello()
// console.log(Figure.double(250));
//
// let environment_text = ''
//
// if (process.env.NODE_ENV === 'development') {
//   environment_text = 'development!';
// } else if (process.env.NODE_ENV === 'production') {
//   environment_text = 'production?';
// } else {
//   environment_text = 'wakaran..';
// }
//
// console.log(environment_text);
