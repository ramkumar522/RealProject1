$('.autoslide1').owlCarousel({
	loop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    items:4,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('.autoslide2').owlCarousel({
	loop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});