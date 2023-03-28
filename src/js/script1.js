var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });

  //onclick work section
  var allbtn = document.querySelector(".my-work__all")
  var designbtn = document.querySelector(".my-work__design")
  var brandbtn = document.querySelector(".my-work__brand")
  var photosbtn = document.querySelector(".my-work__photos")

  var allstory = document.querySelector(".all")
  var designstory = document.querySelector(".design")
  var photostory = document.querySelector(".photos")
  var brandstory = document.querySelector(".brand")

  // for all
  allbtn.classList.add("color")
  allstory.classList.add("show");
  allbtn.addEventListener("click",()=>{
    designbtn.classList.remove("color")
    allbtn.classList.add("color")
    brandbtn.classList.remove("color")
    photosbtn.classList.remove("color")
    //handle blocks
    allstory.classList.add("show");
    designstory.classList.remove("show");
    brandstory.classList.remove("show");
    photostory.classList.remove("show");
  })

  //design 
  
 
  designbtn.addEventListener("click",()=>{
    allbtn.classList.remove("color")
    designbtn.classList.add("color")
    brandbtn.classList.remove("color")
    photosbtn.classList.remove("color")
    designstory.classList.add("show");
    allstory.classList.remove("show");
    brandstory.classList.remove("show");
    photostory.classList.remove("show");

  })
  // //brand
  
  
  brandbtn.addEventListener("click",()=>{
    designbtn.classList.remove("color")
    brandbtn.classList.add("color")
    allbtn.classList.remove("color")
    photosbtn.classList.remove("color")
    brandstory.classList.add("show");
    designstory.classList.remove("show");
    allstory.classList.remove("show");
    photostory.classList.remove("show");

  })

  // //photos
  
  photosbtn.addEventListener("click",()=>{
    designbtn.classList.remove("color")
    photosbtn.classList.add("color")
     brandbtn.classList.remove("color")
    allbtn.classList.remove("color")
    photostory.classList.add("show");
    designstory.classList.remove("show");
    brandstory.classList.remove("show");
    allstory.classList.remove("show");

  })
   
 //modals
 var project1 = document.querySelector(".my-work__project-button1")
 var project2 = document.querySelector(".my-work__project-button2")
 var project3 = document.querySelector(".my-work__project-button3")
 var project4 = document.querySelector(".my-work__project-button4")
 var project5 = document.querySelector(".my-work__project-button5")
 var modal = document.querySelector(".modals")
var close = document.querySelector(".modals__button");
var modalimg = document.querySelector(".modals__img");
var body = document.querySelector("body")

 project1.addEventListener("click",()=>{
  modal.classList.add("showmodal")
  body.classList.add("back");
  modalimg.setAttribute("src","img/img6.jpg")
 })
 project2.addEventListener("click",()=>{
  modal.classList.add("showmodal")
  modalimg.setAttribute("src","img/img7.jpg")
 })
 project3.addEventListener("click",()=>{
  modal.classList.add("showmodal")
  modalimg.setAttribute("src","img/img8.jpg")
 })
 project4.addEventListener("click",()=>{
  modal.classList.add("showmodal")
  modalimg.setAttribute("src","img/img9.jpg")
 })
 project5.addEventListener("click",()=>{
  modal.classList.add("showmodal")
  modalimg.setAttribute("src","img/img10.jpg")
 })

//  close button
 close.addEventListener("click",()=>{
  modal.classList.remove("showmodal")
 })

//  navbar
var menubtn = document.querySelector(".header__menu-btn1");
var list = document.querySelector(".header__total-list");
menubtn.addEventListener("click", ()=>{
    list.classList.add("active");
    menubtn.classList.add("hide")
})

var crossbtn= document.querySelector(".cross");
crossbtn.addEventListener("click",()=>{
  list.classList.remove("active");
  menubtn.classList.remove("hide")
})