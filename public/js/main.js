$(".select-description").click(function(){
    $(".description").css("display", "block");
    $(".details").css("display", "none");
    $(".comments").css("display", "none");
})

$(".select-details").click(function(){
    $(".description").css("display", "none");
    $(".details").css("display", "block");
    $(".comments").css("display", "none");
})

$(".select-comments").click(function(){
    $(".description").css("display", "none");
    $(".details").css("display", "none");
    $(".comments").css("display", "block");
})
