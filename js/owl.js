
$('.owl-carousel').owlCarousel({
    stagePadding: 350, // Reduce stage padding for smaller screens
    loop: true,
    margin: 50,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000, // Increase timeout for better readability
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            margin: 10,
            stagePadding: 0,
        },
        600: {
            items: 1,
            stagePadding: 100,
            margin: 20,
        },
        900: {
            items: 1,
            stagePadding: 200,
            margin: 30,
        },
        1200: {
            items: 1,
            stagePadding: 300,
            margin: 40,
        },
    },
});


function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
