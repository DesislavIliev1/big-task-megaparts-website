$(function(){


    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".product-slider-1",{
      opacity:0,
       x:200,
        ease: "linear",
        duration:1,
        scrollTrigger : {
            trigger:".product-slider-1",
            start: "top 60%",
            toggleActions:"play restart restart reverse"
        }
    })

//     const el = document.getElementsByClassName('nav-anime');
//     const ots = document.getElementsById('nav');

//   setTimeout(() => {
//     ots.style.visibility = 'visible';
  
//     // 👇️ if you used `display` to hide the element
//     // el.style.display = 'block';
//   }, 200);



    
  new Glide('.glide').mount()
  var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
  } );
  
  splide.mount();

 
  ;


//   $('.nav-anime')
//         .css({"opacity":0})   // Set to 0 as soon as possible – may result in flicker, but it's not hidden for users with no JS (Googlebot for instance!)
//         .delay(200)           // Wait for a bit so the user notices it fade in
//         .css({"opacity":1});


//   $('.nav-anime').delay(2000).fadeIn(100);
//   $(".nav-anime").delay(5000).show("slide", { direction: "right" }, 1200);




    // var splide = new Splide( '.splide', {
    //     type   : 'loop',
    //     perPage: 3,
    //     focus  : 'center',
    //   } );
      
    //   splide.mount();
});