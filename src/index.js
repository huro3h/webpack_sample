import { APP_NAME, hello, Figure } from "./myutil";
import './style.css'
import picture from './images/bird.jpg'

window.addEventListener('DOMContentLoaded', function(){
  let img = new Image();
  
  img.src = picture;
  document.body.appendChild(img);
}, false);
