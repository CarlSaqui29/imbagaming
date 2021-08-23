function showMore() {
  document.getElementById("p1").innerHTML = `IMBA users can simultaneously stream and view their channel where they can earn IMBA tokens, 
  creating novelties in the form of NFTs to popular streamers or icons of any industries. It also has a marketplace where everyone can 
  use their IMBA tokens to buy, sell, or trade their rarest items and equipment. The platform is also a vast and substantial opportunity 
  for game developers in launching their games and using IMBA tokens as monetary incentives to loyal supporters. It is a great source of 
  income while having fun playing or watching your favorite gamer’s and streamer’s dynamics.  <a onclick="showLess()">Read Less<a>`;
}
function showLess() {
  document.getElementById("p1").innerHTML = `IMBA users can simultaneously stream and view their channel where they can earn IMBA tokens, 
  creating novelties in the form of NFTs to popular streamers or icons of any industries. <a onclick="showMore()">Read more</a>`;
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Add active class to the current button (highlight it)
/*const header = document.getElementById("nav");
const btns = header.getElementsByClassName("btns");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}*/

// Add active class to the current button roadmap
const roadmap = document.getElementById("rmbtns");
const btn = roadmap.getElementsByClassName("rmbtn");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activee");
  current[0].className = current[0].className.replace(" activee", "");
  this.className += " activee";
  });
}

function closing() {
 const element = document.getElementById("modal-example")
 UIkit.modal(element).hide();
}

document.getElementById("twoBtn").click();

function scaleup(n) {
  const id1 = document.getElementById("r1");
  const id2 = document.getElementById("r2");
  const id3 = document.getElementById("r3");
  const id4 = document.getElementById("r4");
  if(n == 1) {
    id1.style.transform = "scale(1.1)"; 
    id2.style.transform = "scale(1)"; 
    id3.style.transform = "scale(1)"; 
    id4.style.transform = "scale(1)"; 
  } else if(n == 2) {
    id1.style.transform = "scale(1)"; 
    id2.style.transform = "scale(1.1)"; 
    id3.style.transform = "scale(1)"; 
    id4.style.transform = "scale(1)"; 
  } else if(n == 3) {
    id1.style.transform = "scale(1)"; 
    id2.style.transform = "scale(1)"; 
    id3.style.transform = "scale(1.1)"; 
    id4.style.transform = "scale(1)"; 
  } else {
    id1.style.transform = "scale(1)"; 
    id2.style.transform = "scale(1)"; 
    id3.style.transform = "scale(1)"; 
    id4.style.transform = "scale(1.1)"; 
  }
}



/*MIT License

Copyright (c) 2020 Phosphor Icons

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
