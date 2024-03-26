const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const socialNav = document.querySelector('.social-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navList.classList.toggle('open');
    socialNav.classList.toggle('open');
});
$(document).ready(function(){
	$('.hamburger').click(function(){
	  $('.nav-list, .social-nav').toggleClass('open');
	});
  });



/* Add this to your JavaScript */
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-list').classList.toggle('open');
  document.querySelector('.social-nav').classList.toggle('open');
});
