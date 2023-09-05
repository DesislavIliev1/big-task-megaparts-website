$(function(){


    
  new Glide('.glide').mount()
  var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
  } );
  
  splide.mount();




    // var splide = new Splide( '.splide', {
    //     type   : 'loop',
    //     perPage: 3,
    //     focus  : 'center',
    //   } );
      
    //   splide.mount();
});