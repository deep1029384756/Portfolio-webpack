$(document).ready(()=>{
    $(window).scroll(()=>{
        if(this.scrollY > 150){
            $(".header").addClass("sticky");
        }else{
            $(".header").removeClass("sticky");
        }
//  for scroll-up-button
        if(this.scrollY > 500){
            $(".scroll-up-button").addClass("show");
        }else{
            $(".scroll-up-button").removeClass("show");
        }
    })
    // menu button
// $(".header__menu-btn").click(()=>{
//     $(".header__total-list").toggleClass("active")
//     $(".header__menu-btn i").toggleClass("active")
// })

// slide-up-script
$(".scroll-up-button").click(()=>{
    $('html').animate({scrollTop : 0});
    $("html").css("scrollBehaviour",auto);
})

// typing
var type = new Typed(".home__typing b",{
    strings:["I'm a Photograph","I am a developer", "I am a designer","I am Simone Olivia"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
})

