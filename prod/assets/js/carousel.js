var owl = $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
});

owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})