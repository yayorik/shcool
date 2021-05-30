function openMenu() {
    let hamburger = document.querySelector('#hamburger');
    let navLinks = document.querySelector('#navLinks');
    hamburger.onclick = function(){
        hamburger.classList.toggle('hamburger_active');
        navLinks.classList.toggle('nav__links_active');
    }
    let navLinksElements = document.querySelectorAll('#navLinks a');
    navLinksElements.forEach(function(navLinksElement){
        navLinksElement.onclick = function(){
            navLinks.classList.remove('nav__links_active');
            hamburger.classList.remove('hamburger_active');
        }
    })
}
openMenu();
new Swiper('.swiper-container',{
    navigation: {//добавление стрелок
        nextEl: '.swiper-button-next',//стрелка вправо
        prevEl: '.swiper-button-prev',//стрелка влево
    },
    autoplay:{ //автопрокрутка
        delay:2000, //задержка
        stopOnLastSlide:false, //будет ли прокрутка заканчиваться на последнем слайде
        disableOnInteraction:false, //будет ли прокрутка заканчиваться после нажатия на слайд
    },
    speed:2000, // скорость переключения слайдов
    spaceBetween:20, // отступы
    //effect: 'fade' //ефект для слайдов
    effect: 'slide',
    flipEffect:{
        slideShadows:true,//тень для слайда
        limitRotatin:true,//показывает только активный слайд
    },
    loop:true,
    breakpoints: {
        320:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        992:{
            slidesPerView:3,
        },
    },
});