$(window).scroll(function(){
    var scroll;
    if($(window).scrollTop() < 700)
        scroll = $(window).scrollTop();

    $('.text-content').css({
        "-webkit-backdrop-filter": "blur(" + (scroll/100) + "px)",
        "backdrop-filter": "blur(" + (scroll/100) + "px)",
        
    })
})