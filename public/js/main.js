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

$(".left").click(function(){
    $(".left").addClass("active");
    $(".mid").removeClass("active");
    $(".right").removeClass("active");
    $(".img-left").addClass("active");
    $(".img-mid").removeClass("active");
    $(".img-right").removeClass("active");
})

$(".mid").click(function(){
    $(".left").removeClass("active");
    $(".mid").addClass("active");
    $(".right").removeClass("active");
    $(".img-left").removeClass("active");
    $(".img-mid").addClass("active");
    $(".img-right").removeClass("active");
})

$(".right").click(function(){
    $(".left").removeClass("active");
    $(".mid").removeClass("active");
    $(".right").addClass("active");
    $(".img-left").removeClass("active");
    $(".img-mid").removeClass("active");
    $(".img-right").addClass("active");
})

var description_length = $(".description").text().length;
// ADD CODE LATER

var price = $("#price").text();
var quantity = parseInt($(".number").text());
$(".total").text(price*quantity);
$(".minus").click(function(){
    if(quantity>1){
        quantity = quantity-1;
        $(".number").text(quantity);
        $(".total").text(price*quantity);
    }
})

$(".plus").click(function(){
    quantity = quantity + 1;
    $(".number").text(quantity);
    $(".total").text(price*quantity);
})


