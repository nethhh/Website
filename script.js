let menu = document.getElementById("nav");
let open = document.getElementById("menu-btn");
let close = document.getElementById("close");

function openmenu() {
  menu.style.left = "0";
  open.style.display = "none";
  close.style.display = "block";
}
function closemenu() {
  menu.style.left = "-100%";
  open.style.display = "block";
  close.style.display = "none";
}

// nav bg color change

function change() {
  var nav = document.getElementById("navbar");
  var value = window.scrollY;
  if (value > 80) {
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
}

window.addEventListener("scroll", change);

// Smooth scrolling when clicking on a link
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});

// Hide success message after 5 seconds
setTimeout(function() {
$('.alert-success').fadeOut('slow');
}, 5000);
