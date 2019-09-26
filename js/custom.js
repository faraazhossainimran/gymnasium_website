
//.............team part ends...........
$('.banner_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed:900,
  arrows:false,
  dots:true,
});
//.............team part ends...........
$('.team_slide').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed:900,
  arrows:false,
  dots:false,
});
$('.test_slide').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed:1000,
  arrows:false,
  dots:true,
});
$('.partner_slide').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed:1000,
  arrows:true,
  dots:false,
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
});
$('.venobox').venobox(); 








