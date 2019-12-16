$(document).ready(function () {
$(".spincrement").spincrement({
  thousandSeparator: "",
  duration: 1200
});
$(window).on("scroll", function(){
  var w_top = $(window).scrollTop();
  var e_top =$("#counts").offset().top;

  console.log(w_top + " " + e_top);
})
});
