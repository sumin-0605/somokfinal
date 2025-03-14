var swiper = new Swiper(".mySwiper", { 
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    breakpoints: {
        // 화면 크기에 따라 슬라이드 수 조정
        640: {
            slidesPerView: 1, spaceBetween: 10
        }, 768: {
            slidesPerView: 3, spaceBetween: 40
        }, 1024: {
            slidesPerView: 3, spaceBetween: 60
        }},
    //todo : 여기 옵션 넣기 // 1000이 1초
autoplay: {delay: 3000},

pagination: {
    el: ".swiper-pagination", },
   
    
});


AOS.init();

