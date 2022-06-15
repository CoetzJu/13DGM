// JavaScript

// You will see a lot of comment out code as this was
// as they are experimented methods to do functions.
// Some worked better then others, or they did not work.

// Slideshow
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// This is a function for darkmode
function Darkmode() {
  var element = document.body;
  /*const myElement =  document.getElementById("page");
  myElement.style.color = "red";*/
  element.classList.toggle("dark-mode");
}

// Experamental JS
// Text swapping
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "Swapped text!";
  } else {
    x.innerHTML = "Hello";
  }
}

//For saving the dark-mode between pages
// https://stackoverflow.com/questions/71198296/keep-dark-or-light-mode-over-different-pages-with-javascript
checkbox.addEventListener( 'change', function() {
  localStorage.setItem('dark',this.checked);
  if(this.checked) {
       body.classList.add('dark')
  } else {
       body.classList.remove('dark')     
  }
});

if(localStorage.getItem('dark')) {
  body.classList.add('dark');
}