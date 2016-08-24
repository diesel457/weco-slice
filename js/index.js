$(window).load(function() {

  $('.landing-slider').flexslider({
    animation: "slide"
  });

});

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop,
      el = document.querySelector('.header');

  if(scrolled > 100){
    el.classList.add('-scrolled');
  }else{
    el.classList.remove('-scrolled');
  }

};
