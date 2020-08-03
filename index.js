$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$(".nav-item a").on("click", function() {
    $(".nav-item a").removeClass("active");
    $(this).addClass("active");
  });