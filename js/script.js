

//Menu hamburgerowe
///////////////////////////////////////////////////////////////////////////////////
const burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
    burger.classList.toggle('active')
});


//Przemieszczanie się po menu do sekcji
///////////////////////////////////////////////////////////////////////////////////
$('li a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 2000);
});


//Galeria z zdjęciami
///////////////////////////////////////////////////////////////////////////////////
let activeElement = 0;
const timeChange = 4000;
const ImgHtml = document.querySelector('.foto1');
const slideList = ['img/p1.jpg', 'img/p2.jpg', 'img/p3.jpg', 'img/p4.jpg', 'img/p5.jpg'];
const dots = [...document.querySelectorAll('.selector div')];
const galleryBgc = document.querySelector('.gallery');
const colorBgc = ['rgb(110, 118, 137)', '#0f112b', '#968561', '#abc', 'rgb(155,191 ,241 )'];
const opacity = document.querySelector('img.foto1');

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('activeColor'));
    dots[activeDot].classList.remove('activeColor');
    dots[activeElement].classList.add('activeColor');
}

const changeSlide = () => {
    activeElement++;
    if (activeElement === slideList.length) {
        activeElement = 0;
    }
    ImgHtml.src = slideList[activeElement];
    galleryBgc.style.backgroundColor = colorBgc[activeElement];
    opacity.classList.add('opacity');
    changeDot()
}
const index = setInterval(changeSlide, timeChange)

const clickDot = function () {
    opacity.classList.remove('opacity');
    clearInterval(index);
    dots.forEach(dot => dot.classList.remove('activeColor'));

    if (this.classList.contains('dot1')) {
        galleryBgc.style.backgroundColor = 'rgb(110, 118, 137)';
        this.classList.add('activeColor');
        ImgHtml.src = 'img/p1.jpg';

    } else if (this.classList.contains('dot2')) {
        galleryBgc.style.backgroundColor = '#0f112b';
        this.classList.add('activeColor');
        ImgHtml.src = 'img/p2.jpg'

    } else if (this.classList.contains('dot3')) {
        galleryBgc.style.backgroundColor = '#968561';
        this.classList.add('activeColor');
        ImgHtml.src = 'img/p3.jpg'

    } else if (this.classList.contains('dot4')) {
        galleryBgc.style.backgroundColor = '#abc';
        this.classList.add('activeColor');
        ImgHtml.src = 'img/p4.jpg'

    } else if (this.classList.contains('dot5')) {
        galleryBgc.style.backgroundColor = 'rgb(155,191 ,241 )';
        this.classList.add('activeColor');
        ImgHtml.src = 'img/p5.jpg'
    }
}
dots.forEach(dot => dot.addEventListener('click', clickDot));

//Moja mordeczka z telefonem
///////////////////////////////////////////////////////////////////////////////////
const call = document.querySelector('.callme');

call.addEventListener('click', () => {
    call.classList.toggle('clickMe');
})

//Ekran ładowania 
///////////////////////////////////////////////////////////////////////////////////
const dotsLoading = document.querySelector('div.loading span');
const txt = '.......';
let indexText = 0;
const bgLoading = document.querySelector('div.loading');
const h2Loading = document.querySelector('div.loading h2');

const addLetter = () => {
    dotsLoading.textContent += txt[indexText];
    indexText++;
    if (indexText == 4) {
        dotsLoading.textContent = '';
    } else if (indexText == 7) clearInterval(indexTyping);
};
const indexTyping = setInterval(addLetter, 400);

bgLoading.addEventListener('mousemove', function (e) {
    const xL = e.clientX;
    const yL = e.clientY;
    const widthL = window.innerWidth;
    const heightL = window.innerHeight;
    const red = xL / widthL * 100;
    const green = yL / heightL * 100;
    const blue = ((xL / widthL * 100) + (yL / heightL * 100)) / 2;

    if (((red > 73) && (green > 73) && (blue > 73)) || ((red > 20) && (green > 80) && (blue > 50))) {
        h2Loading.style.color = '#000';
    } else h2Loading.style.color = '#ddd';

    bgLoading.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`
})

const hideLoading = function () {
    bgLoading.style.display = 'none';
    window.scrollTo(0, 0);
    clearInterval(indexHiding);
}
const indexHiding = setInterval(hideLoading, 4000);


//Animacje na stronie (pojawianie znikanie, w zależności od scrolla)
///////////////////////////////////////////////////////////////////////////////////
$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    const $textComing1 = $('.textComing1');
    const $textComing2 = $('.textComing2');
    const $header = $('header');
    const preSkillsTextFromTop = $textComing1.offset().top;
    const preSkillsTextHeight = $textComing1.outerHeight();

    const $container1 = $('.container1');
    const container1Height = $container1.outerHeight();
    const container1FromTop = $container1.offset().top;

    const $container2 = $('.container2');
    const container2Height = $container2.outerHeight();
    const container2FromTop = $container2.offset().top;

    const $container3 = $('.container3');
    const container3Height = $container3.outerHeight();
    const container3FromTop = $container3.offset().top;

    const $container4 = $('.container4');
    const container4Height = $container4.outerHeight();
    const container4FromTop = $container4.offset().top;

    const $container5 = $('.container5');
    const container5Height = $container5.outerHeight();
    const container5FromTop = $container5.offset().top;

    const $container6 = $('.container6');
    const container6Height = $container6.outerHeight();
    const container6FromTop = $container6.offset().top;

    const $container7 = $('.container7');
    const container7Height = $container7.outerHeight();
    const container7FromTop = $container7.offset().top;

    const $container8 = $('.container8');
    const container8Height = $container8.outerHeight();
    const container8FromTop = $container8.offset().top;

    if (scrollValue > preSkillsTextFromTop + preSkillsTextHeight - windowHeight + 100) {
        $textComing1.addClass('animate')
        $textComing2.addClass('animate')
    }
    if (scrollValue < preSkillsTextFromTop + preSkillsTextHeight - windowHeight + 270) {
        $header.css('position', 'fixed')
    }
    if (scrollValue > preSkillsTextFromTop + preSkillsTextHeight - windowHeight + 280) {
        $header.css('position', 'absolute')
    }
    if (scrollValue > preSkillsTextFromTop + preSkillsTextHeight - windowHeight + 500) {
        $('.wave').addClass('run')
    }
    if ((scrollValue > container1FromTop - windowHeight + container1Height + 50) && (window.innerWidth >= 500)) {
        $('.one').addClass('point1');
        $('.two').addClass('point1');
        $('.three').addClass('point1');
        $('.four').addClass('point1');
        $('.callme').addClass('later')
    }
    if ((scrollValue > container1FromTop - windowHeight + container1Height - 150) && (window.innerWidth < 500)) {
        $('.one').addClass('point1');
        $('.two').addClass('point1');
        $('.three').addClass('point1');
        $('.four').addClass('point1');
        $('.callme').addClass('later')
    }
    if ((scrollValue < container1FromTop - windowHeight + container1Height + 50) && (window.innerWidth >= 500)) {
        $('.callme').removeClass('later')
    }
    if ((scrollValue > container2FromTop - windowHeight + container2Height + 50) && (window.innerWidth >= 500)) {
        $('.one').addClass('point2');
        $('.two').addClass('point2');
        $('.three').addClass('point2');
    }
    if ((scrollValue > container3FromTop - windowHeight + container3Height + 50) && (window.innerWidth >= 500)) {
        $('.one').addClass('point3');
        $('.two').addClass('point3');
    }
    if ((scrollValue > container4FromTop - windowHeight + container4Height + 50) && (window.innerWidth >= 500)) {
        $('.one').addClass('point4');
        $('.two').addClass('point4');
    }
    if ((scrollValue > container5FromTop - windowHeight + container5Height + 50) && (window.innerWidth >= 500)) {
        $('.one').addClass('point5');
        $('.two').addClass('point5');
        $('.three').addClass('point5');
    }
    if ((scrollValue > container6FromTop - windowHeight + container6Height + 50) && (window.innerWidth >= 500)) {
        $('.one').addClass('point6');
        $('.two').addClass('point6');
        $('.three').addClass('point6');
        $('.four').addClass('point6');
    }
    if ((scrollValue > container7FromTop - windowHeight + container7Height + 50) && (window.innerWidth >= 500)) {
        $('.one').addClass('point7');
        $('.two').addClass('point7');
    }
    if ((scrollValue > container8FromTop - windowHeight + container8Height + 50) && (window.innerWidth >= 500)) {
        $('.one').addClass('point8');
        $('.two').addClass('point8');
        $('.three').addClass('point8');
    }
    if ((scrollValue < container1FromTop - windowHeight + container1Height - 150) && (window.innerWidth < 500)) {
        $('.callme').removeClass('later')
    }
    if ((scrollValue > container2FromTop - windowHeight + container2Height - 150) && (window.innerWidth < 500)) {
        $('.one').addClass('point2');
        $('.two').addClass('point2');
        $('.three').addClass('point2');
    }
    if ((scrollValue > container3FromTop - windowHeight + container3Height - 150) && (window.innerWidth < 500)) {
        $('.one').addClass('point3');
        $('.two').addClass('point3');
    }
    if ((scrollValue > container4FromTop - windowHeight + container4Height - 150) && (window.innerWidth < 500)) {
        $('.one').addClass('point4');
        $('.two').addClass('point4');
    }
    if ((scrollValue > container5FromTop - windowHeight + container5Height - 150) && (window.innerWidth < 500)) {
        $('.one').addClass('point5');
        $('.two').addClass('point5');
        $('.three').addClass('point5');
    }
    if ((scrollValue > container6FromTop - windowHeight + container6Height - 150) && (window.innerWidth < 500)) {
        $('.one').addClass('point6');
        $('.two').addClass('point6');
        $('.three').addClass('point6');
        $('.four').addClass('point6');
    }
    if ((scrollValue > container7FromTop - windowHeight + container7Height - 150) && (window.innerWidth < 500)) {
        $('.one').addClass('point7');
        $('.two').addClass('point7');
    }
    if ((scrollValue > container8FromTop - windowHeight + container8Height - 150) && (window.innerWidth < 500)) {
        $('.one').addClass('point8');
        $('.two').addClass('point8');
        $('.three').addClass('point8');
    }

    const $about = $('.bgc');
    const AboutFromTop = $about.offset().top;
    const AboutHeight = $about.outerHeight();

    if ((scrollValue > AboutFromTop - windowHeight + AboutHeight / 2) && (window.innerWidth > 700)) {
        $('.bgc').addClass('animate4');
        $('.bgc img').addClass('animate4');
        $('.about p').addClass('animate4');
    }

    const $yt = $('.preYt');
    const ytFromTop = $yt.offset().top;
    const ytHeight = $yt.outerHeight();

    if (scrollValue > ytFromTop - windowHeight + ytHeight + 200) {
        $('.preYt').addClass('animate5');
    }
    if (scrollValue > ytFromTop - windowHeight + ytHeight + 600) {
        $('.youtube .video').addClass('animate6');
        $('.preYt').addClass('animate6');
    }

    const $about2 = $('.bgc2');
    const About2FromTop = $about2.offset().top;
    const About2Height = $about2.outerHeight();

    if ((scrollValue > About2FromTop - windowHeight + About2Height / 2) && (window.innerWidth > 700)) {
        $('.bgc2').addClass('animate7');
        $('.bgc2 img').addClass('animate7');
        $('.about2 p').addClass('animate7');
        $('.about2 h2').addClass('animate7');
    }

    const $me = $('.gallery')
    const meFromTop = $me.offset().top
    const meHeight = $me.outerHeight();
    const $phone = $('.checkPhone')
    const phoneFromTop = $phone.offset().top
    const phoneHeight = $phone.outerHeight();

    if (scrollValue > phoneFromTop - windowHeight + phoneHeight / 2 + 200) {
        $('.textPhone').addClass('animate8')
    }

    const $contact = $('.contact')
    const contactFromTop = $contact.offset().top
    const contactHeight = $contact.outerHeight();

    if (scrollValue < 100) {
        $textComing1.removeClass('animate')
        $textComing2.removeClass('animate')
        $('.wave').removeClass('run')
        $('.one').removeClass('point1 point2 point3 point4 point5 point6 point7 point8');
        $('.two').removeClass('point1 point2 point3 point4 point5 point6 point7 point8');
        $('.three').removeClass('point1 point2 point3 point4 point5 point6 point7 point8');
        $('.four').removeClass('point1 point2 point3 point4 point5 point6 point7 point8');
    }
})