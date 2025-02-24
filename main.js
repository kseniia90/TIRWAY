// if(window.innerWidth > 900){
//     document.querySelectorAll('.call-me__btn').forEach((item)=>{
//         item.addEventListener('click', ()=>{
//             document.querySelector('[data-modal="#call-me"]').click();
//         })
//     })
// }else{
//     document.querySelectorAll('.call-me__btn').forEach((item)=>{
//         item.addEventListener('click', ()=>{
//             document.querySelector('[href="#menu"]').click();
//             document.querySelector('[href="#callback-form"]').click();
//         })
//     })
// }

var swiperOurWorks = new Swiper(".trw__slider_1", {
    // loop: true,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    // pagination: {
    //     el: ".swiper-pagination",
    // },
    // autoplay: {
    //     delay: 3500,
    // },
    // breakpoints: {
    //     0: {
    //         slidesPerView: 1,
    //         spaceBetween: 15,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,  
    //         slidesPerGroup: 2,
             
    //     },
    // },
    loop: true,
    spaceBetween: 15, 
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});

// popup start

if (document.querySelector(".trw-popup") !== null) {

    window.addEventListener("click", function (e) {

        if(e.target.closest('.open-popup_trw')) {
            e.preventDefault();
            document.querySelector(".trw-popup").classList.add("active");
            document.body.style.overflow = "hidden";
        } else {
            if(e.target.closest('.trw-popup__close')) {
                e.preventDefault();
                document.querySelector(".trw-popup").classList.remove("active");
                document.body.style.overflow = "auto";
            }
    
            if (document.querySelector(".trw-popup.active") && !e.target.closest('.trw-popup-content')) {
                document.querySelector(".trw-popup").classList.remove("active");
                document.body.style.overflow = "auto";
            }
        }  
    }); 

  };

if (document.querySelector(".trw-popup-thanks") !== null) {

    document.querySelector(".trw-popup__close-thanks").addEventListener('click', (e)=>{
        e.preventDefault();
            document.querySelector(".trw-popup-thanks").classList.remove("active");
            document.body.style.overflow = "auto";
      })
};
  
  // popup end
