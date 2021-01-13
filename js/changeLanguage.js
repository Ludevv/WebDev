const english = document.querySelector('.eng')
const polish = document.querySelector('.pl')

polish.addEventListener('click', function () {
    document.querySelector('.hey').textContent = "Witaj! Nazywam się Piotr Ludew"
    document.querySelector('.front').textContent = "i chcę pracować jako Front-End Developer"
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
    $('input:text:nth-of-type(1)').attr('placeholder', 'Twoję imię...');
    $('textarea').attr('placeholder', 'Twoja wiadomość...');
    document.querySelector('.origin').textContent = "Początek"
    document.querySelector('.abilities').textContent = "Umiejętności"
    document.querySelector('.work').textContent = "Praca"
    document.querySelector('.programmer').textContent = "Programowanie"
    document.querySelector('.aboutMyLife').textContent = "O mnie"
    document.querySelector('.form').textContent = "Kontakt"
})

english.addEventListener('click', function () {
    document.querySelector('.hey').textContent = "Hi! My name is Piotr Ludew"
    document.querySelector('.front').textContent = "I want to work as Front-End Developer"
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
    $('input:text:nth-of-type(1)').attr('placeholder', 'Your name...');
    $('textarea').attr('placeholder', 'Your message...');
    document.querySelector('.origin').textContent = "Top"
    document.querySelector('.abilities').textContent = "Abilities"
    document.querySelector('.work').textContent = "Job"
    document.querySelector('.programmer').textContent = "Coding"
    document.querySelector('.aboutMyLife').textContent = "About Me"
    document.querySelector('.form').textContent = "Contact"
})