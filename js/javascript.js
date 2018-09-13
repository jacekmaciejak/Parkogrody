var $arrow = $("#arrow");
var $off = $("main").offset().top;

$("#arrow").on("click", function () {
    $("body,html").animate({
        scrollTop: $("main").offset().top
    }, 800)
})
