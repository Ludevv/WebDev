let boxName = document.querySelector('.myName');
let boxJob = document.querySelector('.myJob');

const name = 'Piotr Ludew';
const job = 'Front-End Developer';

function welcome() {
    boxName.textContent = name;
    boxName.classList.add('showVariables');
    boxJob.textContent = job;
    boxJob.classList.add('showVariables');
};

function delay() {
    setTimeout(welcome, 5700);
}

delay();







const burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
    burger.classList.toggle('active')
});


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



    if (scrollValue > container1FromTop - windowHeight + container1Height + 50) {

        $('.one').addClass('point1');
        $('.two').addClass('point1');
        $('.three').addClass('point1');
        $('.four').addClass('point1');
        // burger.style.color = '#11121f'
        $('.callme').addClass('later')
    }

    if (scrollValue < container1FromTop - windowHeight + container1Height + 50) {


        $('.callme').removeClass('later')
    }


    if (scrollValue > container2FromTop - windowHeight + container2Height + 50) {

        $('.one').addClass('point2');
        $('.two').addClass('point2');
        $('.three').addClass('point2');
    }

    if (scrollValue > container3FromTop - windowHeight + container3Height + 50) {

        $('.one').addClass('point3');
        $('.two').addClass('point3');
    }

    if (scrollValue > container4FromTop - windowHeight + container4Height + 50) {

        $('.one').addClass('point4');
        $('.two').addClass('point4');

    }

    if (scrollValue > container5FromTop - windowHeight + container5Height + 50) {

        $('.one').addClass('point5');
        $('.two').addClass('point5');
        $('.three').addClass('point5');
    }

    if (scrollValue > container6FromTop - windowHeight + container6Height + 50) {

        $('.one').addClass('point6');
        $('.two').addClass('point6');
        $('.three').addClass('point6');
        $('.four').addClass('point6');
    }

    if (scrollValue > container7FromTop - windowHeight + container7Height + 50) {

        $('.one').addClass('point7');
        $('.two').addClass('point7');

    }

    if (scrollValue > container8FromTop - windowHeight + container8Height + 50) {
        $('.one').addClass('point8');
        $('.two').addClass('point8');
        $('.three').addClass('point8');
    }

    const $about = $('.bgc');
    const AboutFromTop = $about.offset().top;
    const AboutHeight = $about.outerHeight();


    if (scrollValue > AboutFromTop - windowHeight + AboutHeight / 2) {
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

    //     if (window.innerWidth >= 1040) {
    //         if (scrollValue > ytFromTop - windowHeight + ytHeight+125) {
    //             burger.style.color = '#fff'
    //         }
    //     }
    // //BYLO ZLY ZNAK XDDDDDDDDDD
    //     if ((window.innerWidth < 1040) && (window.innerWidth > 900)) {
    //         if (scrollValue > ytFromTop - windowHeight + ytHeight + 300) {
    //             burger.style.color = '#fff'
    //         }
    //     }

    //     if ((window.innerWidth < 900) && (window.innerWidth > 700)) {
    //         if (scrollValue > ytFromTop - windowHeight + ytHeight + 300) {
    //             burger.style.color = '#fff'
    //         }
    //     }

    //     if (window.innerWidth < 700) {

    //             burger.style.color = 'rgb(111, 238, 89)'

    //     }


    const $about2 = $('.bgc2');
    const About2FromTop = $about2.offset().top;
    const About2Height = $about2.outerHeight();

    if (scrollValue > About2FromTop - windowHeight + About2Height / 2) {
        $('.bgc2').addClass('animate7');
        $('.bgc2 img').addClass('animate7');
        $('.about2 p').addClass('animate7');
        $('.about2 h2').addClass('animate7');

    }
    // if ((scrollValue > About2FromTop - windowHeight + About2Height)&& (window.innerWidth > 700)){

    //     burger.style.color = '#11121f'
    // }

    const $me = $('.gallery')
    const meFromTop = $me.offset().top
    const meHeight = $me.outerHeight();

    // if ((scrollValue > meFromTop - windowHeight)&& (window.innerWidth > 700)){

    //     burger.style.color = '#fff'
    // }

    const $phone = $('.checkPhone')
    const phoneFromTop = $phone.offset().top
    const phoneHeight = $phone.outerHeight();








    // if (window.innerWidth >= 1024) {

    //     if ((scrollValue > phoneFromTop - windowHeight + phoneHeight -30)&& (window.innerWidth > 700)){

    //         burger.style.color = '#000'
    //     }
    // }

    // if ((window.innerWidth < 1024) && (window.innerWidth > 900)) {
    //     if ((scrollValue > phoneFromTop - windowHeight + phoneHeight -300)&& (window.innerWidth > 700)){

    //         burger.style.color = '#000'
    //     }
    // }

    // if ((window.innerWidth < 900) && (window.innerWidth > 700)) {
    //     if ((scrollValue > phoneFromTop - windowHeight + phoneHeight -250)&& (window.innerWidth > 700)){

    //         burger.style.color = '#000'
    //     }
    // }


    if (scrollValue > phoneFromTop - windowHeight + phoneHeight / 2 + 200) {

        $('.textPhone').addClass('animate8')
    }


    const $contact = $('.contact')
    const contactFromTop = $contact.offset().top
    const contactHeight = $contact.outerHeight();


    // if ((window.innerWidth < 1024) && (window.innerWidth > 900)) {
    //     if ((scrollValue > contactFromTop - windowHeight + contactHeight-200)&& (window.innerWidth > 700)){

    //         burger.style.color = 'rgb(111, 238, 89)'
    //     }
    // }

    // if ((window.innerWidth < 900) && (window.innerWidth > 700)) {
    //     if ((scrollValue > contactFromTop - windowHeight + contactHeight -150)&& (window.innerWidth > 700)){

    //         burger.style.color = 'rgb(111, 238, 89)'
    //     }
    // }

    if (scrollValue < 100) {
        $textComing1.removeClass('animate')
        $textComing2.removeClass('animate')
        $('.wave').removeClass('run')
        $('.one').removeClass('point1 point2 point3 point4 point5 point6 point7 point8');
        $('.two').removeClass('point1 point2 point3 point4 point5 point6 point7 point8');
        $('.three').removeClass('point1 point2 point3 point4 point5 point6 point7 point8');
        $('.four').removeClass('point1 point2 point3 point4 point5 point6 point7 point8');
    }

    // if (scrollValue < container1FromTop - windowHeight + container1Height - 50){

    //     burger.style.color = 'rgb(111, 238, 89)'

    // }
})


// GALERIA //
/////////////
/////////////
//Parametry
let activeElement = 0;
let activeElement1 = 0;
let activeElement2 = 0;
const timeChange = 4000;
// Pobieramy  elementy na których pracujemy
const ImgHtml = document.querySelector('.foto1');;


//Informacje w tablicach o elementach podmienianych
const colorImages = ['img/p1.jpg', 'img/p2.jpg', 'img/p3.jpg', 'img/p4.jpg', 'img/p5.jpg'];


function changeElement() {
    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }
    ImgHtml.src = colorImages[activeElement];
}
setInterval(changeElement, timeChange)


//Zmiana koloru tła w sekcji O MNIE
const galleryBgc = document.querySelector('.gallery')
const colorBgc = ['rgb(110, 118, 137)', '#0f112b', '#968561', '#abc', 'rgb(155,191 ,241 )'];

function changeElement1() {
    activeElement1++;
    if (activeElement1 == colorBgc.length) {
        activeElement1 = 0;
    }
    galleryBgc.style.backgroundColor = colorBgc[activeElement];
}
setInterval(changeElement1, timeChange)



//Przemieszczanie się po menu do sekcji
$('li a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 2000)
})





const english = document.querySelector('.eng')
const polish = document.querySelector('.pl')

polish.addEventListener('click', function () {
    document.querySelector('.hey').textContent = "Witaj! Nazywam się "
    document.querySelector('.front').textContent = "i chcę pracować jako "
    document.querySelector('.textComing1').textContent = "Co"
    document.querySelector('.textComing2').textContent = "potrafię?"
    document.querySelector('.advanced1').textContent = "Poziom zaawansowania"
    document.querySelector('.advanced2').textContent = "Poziom zaawansowania"
    document.querySelector('.advanced3').textContent = "Poziom zaawansowania"
    document.querySelector('.advanced4').textContent = "Poziom zaawansowania"
    document.querySelector('.advanced5').textContent = "Poziom zaawansowania"
    document.querySelector('.advanced6').textContent = "Poziom zaawansowania"
    document.querySelector('.advanced7').textContent = "Poziom zaawansowania"
    document.querySelector('.advanced8').textContent = "Poziom zaawansowania"

    document.querySelector('.advanced1').style.margin = "0px"
    document.querySelector('.advanced2').style.margin = "0px"
    document.querySelector('.advanced3').style.margin = "0px"
    document.querySelector('.advanced4').style.margin = "0px"
    document.querySelector('.advanced5').style.margin = "0px"
    document.querySelector('.advanced6').style.margin = "0px"
    document.querySelector('.advanced7').style.margin = "0px"
    document.querySelector('.advanced8').style.margin = "0px"

    document.querySelector('.pro1').textContent = "Zaawansowany"
    document.querySelector('.pro6').textContent = "Zaawansowany"
    document.querySelector('.headerAbout').textContent = "TROSZKĘ O MOJEJ PRACY..."
    //EDIT
    document.querySelector('.pAbout').textContent = "Jako programista przemysłowy, zajmuję się tworzeniem oprogramowania dla robotów, linii przemysłowych oraz systemów wizyjnych. Moim codziennym zadaniem jest odnajdywanie się w różnych środowiskach programistycznych i językach programowania, co wymaga wysokich zdolności analitycznego i programistycznego sposobu myślenia. Jak wiadomo elementem pracy programisty jest ciągła styczność z dokumentacją, także w innych językach np. włoskim. W pracy często wykorzystuję Pythona do automatyzacji zadań, czy tworzenia komunikacji po protokole TCP/IP. Rozpoczęcie pracy zawodowej zaraz po ukończeniu studiów oraz samodzielne doszkalanie się dały mi możliwość intensywnego rozwoju. W zaledwie półtora roku otrzymałem tytuł młodszego specjalisty i powierzono mi prowadzenie projektów w dużym koncernie spożywczym. Moja obecna praca sprowadza się do dużej ilości wyjazdów, dlatego przy podjęciu nowej zależy mi, aby była ona stacjonarna."
    document.querySelector('.h3YouTube').textContent = "CO ROBIĘ W PRAKTYCE?"
    document.querySelector('.headerAbout2').textContent = "PASJA PROGRAMOWANIA..."
    //EDIT
    document.querySelector('.pAbout2').textContent = "Idea mojej pracy wbrew pozorom jest bardzo powiązana ze światem IT, dlatego też zadecydowałem o przebranżowieniu na Front-End Developera. Programowanie jest moją pasją, w której najbardziej lubię, gdy moja głowa każdego dnia „pali się” nad rozwiązaniem danego problemu. Od roku intensywnie pracuję nad nauką JavaScript i React, która podyktowana była potrzebą pisania oprogramowania na roboty współpracujące HCR oraz systemy wizyjne firmy COGNEX. Mam za sobą dużą ilość kursów HTML, CSS, co sprawia, że czuję się mocny w tych technologiach i nie straszna mi kaskadowość. Ponadto, stosuję responsywne tworzenie stron, oraz ideę mobile-first. Dzięki odpowiedniemu przygotowaniu uważam, że nadeszła pora, aby zająć się programowaniem komercyjnie. Jeśli dacie mi Państwo szansę, to obiecuję, że bardzo szybko stanę się samodzielnym, wykwalifikowanym pracownikiem. Jestem osobą, która szybko przyswaja wiedzę i umie wykorzystać ją w praktyce."
    document.querySelector('.headerAbout3').textContent = "... I O MNIE"
    //EDIT
    document.querySelector('.h4About3').textContent = "Z natury jestem otwartym i wesołym człowiekiem. Moją największą zaletą jest pracowitość i dążenie do postawionego sobie celu. Wiąże się to jednak z moją największą wadą, jaką jest upartość. W wolnych chwilach, oprócz programowania, lubię grać na konsoli, oglądać mecze, filmy i seriale. Dbam również o aktywność fizyczną, gdy sprzyja pogoda śmigam na rolkach, czy gram w piłkę nożną z przyjaciółmi."
    document.querySelector('.textPhone').textContent = "Koniecznie sprawdź moją stronę na swoim smartfonie!"
    document.querySelector('.hContact').textContent = "kontakt"
    document.querySelector('.sendMessage').textContent = "wyślij wiadomość"
    $('input:text:nth-of-type(1)').attr('placeholder','Twoję imię...');
    $('textarea').attr('placeholder','Twoja wiadomość...');
    document.querySelector('.origin').textContent = "Początek"
    document.querySelector('.abilities').textContent = "Umiejętności"
    document.querySelector('.work').textContent = "Praca"
    document.querySelector('.programmer').textContent = "Programowanie"
    document.querySelector('.aboutMyLife').textContent = "O mnie"
    document.querySelector('.form').textContent = "Kontakt"
})



english.addEventListener('click', function () {
    document.querySelector('.hey').textContent = "Hi! My name is "
    document.querySelector('.front').textContent = "I want to work as "
    document.querySelector('.textComing1').textContent = "My"
    document.querySelector('.textComing2').textContent = "abilities"
    document.querySelector('.advanced1').textContent = "Tech stack"
    document.querySelector('.advanced1').style.margin = "0px 70px 0px 70px"
    document.querySelector('.advanced2').textContent = "Tech stack"
    document.querySelector('.advanced2').style.margin = "0px 70px 0px 70px"
    document.querySelector('.advanced3').textContent = "Tech stack"
    document.querySelector('.advanced3').style.margin = "0px 70px 0px 70px"
    document.querySelector('.advanced4').textContent = "Tech stack"
    document.querySelector('.advanced4').style.margin = "0px 70px 0px 70px"
    document.querySelector('.advanced5').textContent = "Tech stack"
    document.querySelector('.advanced5').style.margin = "0px 70px 0px 70px"
    document.querySelector('.advanced6').textContent = "Tech stack"
    document.querySelector('.advanced6').style.margin = "0px 70px 0px 70px"
    document.querySelector('.advanced7').style.margin = "0px 70px 0px 70px"
    document.querySelector('.advanced7').textContent = "Tech stack"
    document.querySelector('.advanced8').textContent = "Tech stack"
    document.querySelector('.advanced8').style.margin = "0px 70px 0px 70px"
    document.querySelector('.pro1').textContent = "Advanced"
    document.querySelector('.pro6').textContent = "Advanced"
    document.querySelector('.headerAbout').textContent = "About my job..."
    document.querySelector('.pAbout').textContent = "As an industrial programmer, I create software for robots, technological lines and vision systems in five-person team. My typical day is to find myself in various programming environments and computer languages, which requires the use of analytical skills and programming mindset. As you know, the job of a programmer is in constant work with the documentation, also in other languages, e.g. Italian in my case. At work, I often use Python to automate tasks or communicate over the TCP / IP protocol. I started my professional career right after graduating from university and self-training gave me the opportunity for intensive development. In just a year and a half, I received the title of junior specialist and was entrusted with running projects with a huge food concern. My current job involves a large number of trips and this is the reason why I want to change job."
    document.querySelector('.h3YouTube').textContent = "What's about practice"
    document.querySelector('.headerAbout2').textContent = "passion for coding..."
    //EDIT
    document.querySelector('.pAbout2').textContent = "The idea of my work is very related to the IT world, which is why I decided displacement to the Front-End Developer. Programming is my passion, which I like the most when my head is „on fire” every day over solving a coding problems. I have been working intensively on the learning of JavaScript and React, which was dictated by the need to implement the software for cooperating with human robots HCR and vision systems COGNEX. I have a lot of HTML, CSS courses behind me, which makes me feel strong in these technologies and I understand cascading completely . In addition, I use responsive website development and the mobile-first idea. Thanks with proper preparation, I believe it's time to start programming commercially. If you give me a chance, I promise that I will become independent and qualified very quickly worker. I am a person who quickly assimilates knowledge and knows how to use it in practice."
    document.querySelector('.headerAbout3').textContent = "... and about me"
    //EDIT
    document.querySelector('.h4About3').textContent = "By nature I am an open and cheerful person. My greatest advantage is diligence and striving to achieve my goal. However, this is related to my biggest flaw, which is stubbornness. In my free time, apart from programming, I like to play on the console, watch matches, movies and TV series. I also take care of physical activity, when the weather is fine, I skate or play football with my friends."
    document.querySelector('.textPhone').textContent = "You may to check out my website on your smartphone!"
    document.querySelector('.hContact').textContent = "contact"
    document.querySelector('.sendMessage').textContent = "send message"
    $('input:text:nth-of-type(1)').attr('placeholder','Your name...');
    $('textarea').attr('placeholder','Your message...');
    document.querySelector('.origin').textContent = "Top"
    document.querySelector('.abilities').textContent = "Abilities"
    document.querySelector('.work').textContent = "Job"
    document.querySelector('.programmer').textContent = "Coding"
    document.querySelector('.aboutMyLife').textContent = "About Me"
    document.querySelector('.form').textContent = "Contact"

})

