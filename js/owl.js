$('.owl-carousel').owlCarousel({
    stagePadding: 400,
    loop:true,
    margin:40,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            margin:0,
            stagePadding:0,
        },
        600:{
            items:1,
            stagePadding: 50,
            margin:50,
            nav:false,
        },
        900:{
            items:1,
            stagePadding: 200,
            margin:20,
        },
        1200:{
          items:1,
          stagePadding: 300,
          margin:20
        }
    }
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
