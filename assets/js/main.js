
const scrollbtn = document.querySelector('.scrol_btn')

window.addEventListener('scroll', () => {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    scrollbtn.style.display = 'block';
  }
  else{
    scrollbtn.style.display = 'none';
  }

})
scrollbtn.addEventListener('click' , () => {
  window.scroll({
    top: 0,
    behavior: "smooth"

  })

})

// --============--SCROll BTN END--============--

new Mmenu(document.querySelector('#mobile_items'));

document.addEventListener('click', function (evnt) {
    var anchor = evnt.target.closest('a[href^="#/"]');
    if (anchor) {
        alert("Thank you for clicking, but that's a demo link.");
        evnt.preventDefault();
    }
});

// --=====================--Mmenu END--======================--

$(document).ready(function(){
  $('.inner_slide_sec').slick({
      infinite: true,
      cssEase: 'linear',
      // autoplay: 600,      
      arrows:true,    
      cssEase: 'linear',
      prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  
    })
  });

// --=====================--MENU SCROLL STICKY END--====================--

new WOW().init();




