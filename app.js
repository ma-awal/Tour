// my slides
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName(' mySlides');
  console.log(x);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = 'block';
  setTimeout(carousel, 4000);
}

const form = document.querySelector('.form');
form.addEventListener('change', (e) => {
  e.preventDefault();
});

const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => {
      item.classList.remove('active');
    });
    link.classList.add('active');
  });
});

const btn = document.querySelector('.search_btn');
const modal = document.querySelector('.modal');
const remove = document.querySelector('.remove');
const body = document.querySelector('body');
console.log(modal);
btn.addEventListener('click', () => {
  modal.classList.add('show');
  body.classList.add('body-no-scroll');
});
remove.addEventListener('click', () => {
  modal.classList.remove('show');
  body.classList.remove('body-no-scroll');
});

const bar = document.querySelector('.bar_icon');
const nav = document.querySelector('.nav_item');
nav.addEventListener('click', () => {
  nav.classList.remove('show');
});
bar.addEventListener('click', () => {
  nav.classList.toggle('show');
});
window.addEventListener('load', () => {
  nav.classList.remove('show');
});
