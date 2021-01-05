const card1 = document.querySelector('.card1');
const container1 = document.querySelector('.container1');

container1.addEventListener('mousemove', (e) => {

    let xAxis1 = (window.innerWidth / 2 - e.pageX) / 11;
    if ($(window).width() > 1366) {
        card1.style.transform = `rotateY(${xAxis1}deg)  `
    }
});
const card2 = document.querySelector('.card2');
const container2 = document.querySelector('.container2');

container2.addEventListener('mousemove', (e) => {

    let xAxis2 = (window.innerWidth / 2 - e.pageX) / 11;
    if ($(window).width() > 1366) {
        card2.style.transform = `rotateY(${xAxis2}deg)  `
    }
});

const card3 = document.querySelector('.card3');
const container3 = document.querySelector('.container3');

container3.addEventListener('mousemove', (e) => {

    let xAxis3 = (window.innerWidth / 2 - e.pageX) / 11;
    if ($(window).width() > 1366) {
        card3.style.transform = `rotateY(${xAxis3}deg)  `
    }
});

const card4 = document.querySelector('.card4');
const container4 = document.querySelector('.container4');

container4.addEventListener('mousemove', (e) => {

    let xAxis4 = (window.innerWidth / 2 - e.pageX) / 11;
    if ($(window).width() > 1366) {
        card4.style.transform = `rotateY(${xAxis4}deg)  `
    }
});

const card5 = document.querySelector('.card5');
const container5 = document.querySelector('.container5');

container5.addEventListener('mousemove', (e) => {

    let xAxis5 = (window.innerWidth / 2 - e.pageX) / 11;
    if ($(window).width() > 1366) {
        card5.style.transform = `rotateY(${xAxis5}deg)  `
    }
});

const card6 = document.querySelector('.card6');
const container6 = document.querySelector('.container6');

container6.addEventListener('mousemove', (e) => {

    let xAxis6 = (window.innerWidth / 2 - e.pageX) / 11;
    if ($(window).width() > 1366) {
        card6.style.transform = `rotateY(${xAxis6}deg)  `
    }
});

const card7 = document.querySelector('.card7');
const container7 = document.querySelector('.container7');

container7.addEventListener('mousemove', (e) => {

    let xAxis7 = (window.innerWidth / 2 - e.pageX) / 11;
    if ($(window).width() > 1366) {
        card7.style.transform = `rotateY(${xAxis7}deg)  `
    }
});

const card8 = document.querySelector('.card8');
const container8 = document.querySelector('.container8');

container8.addEventListener('mousemove', (e) => {

    let xAxis8 = (window.innerWidth / 2 - e.pageX) / 11;
    if ($(window).width() > 1366) {
        card8.style.transform = `rotateY(${xAxis8}deg)  `
    }
});


const title1 = document.querySelector('.html1 .title');
const html1 = document.querySelector('.html1 .html img');
const h31 = document.querySelector('.html1 h3');
const h41 = document.querySelector('.html1 h4');
const circles1 = document.querySelector('.html1 .circles');


const title2 = document.querySelector('.css1 .title');
const html2 = document.querySelector('.css1 .css img');
const h32 = document.querySelector('.css1 h3');
const h42 = document.querySelector('.css1 h4');
const circles2 = document.querySelector('.css1 .circles');

const title3 = document.querySelector('.js1 .title');
const html3 = document.querySelector('.js1 .js img');
const h33 = document.querySelector('.js1 h3');
const h43 = document.querySelector('.js1 h4');
const circles3 = document.querySelector('.js1 .circles');

const title4 = document.querySelector('.react1 .title');
const html4 = document.querySelector('.react1 .react img');
const h34 = document.querySelector('.react1 h3');
const h44 = document.querySelector('.react1 h4');
const circles4 = document.querySelector('.react1 .circles');

const title5 = document.querySelector('.jquery1 .title');
const html5 = document.querySelector('.jquery1 .jquery img');
const h35 = document.querySelector('.jquery1 h3');
const h45 = document.querySelector('.jquery1 h4');
const circles5 = document.querySelector('.jquery1 .circles');

const title6 = document.querySelector('.sass1 .title');
const html6 = document.querySelector('.sass1 .sass img');
const h36 = document.querySelector('.sass1 h3');
const h46 = document.querySelector('.sass1 h4');
const circles6 = document.querySelector('.sass1 .circles');

const title7 = document.querySelector('.python1 .title');
const html7 = document.querySelector('.python1 .python img');
const h37 = document.querySelector('.python1 h3');
const h47 = document.querySelector('.python1 h4');
const circles7 = document.querySelector('.python1 .circles');

const title8 = document.querySelector('.github1 .title');
const html8 = document.querySelector('.github1 .github img');
const h38 = document.querySelector('.github1 h3');
const h48 = document.querySelector('.github1 h4');
const circles8 = document.querySelector('.github1 .circles');






container1.addEventListener('mouseenter', e => {
    card1.style.transision = 'none';
    if ($(window).width() > 1366) {
        title1.style.transform = "translateZ(100px)";
        html1.style.transform = "translateZ(60px)";
        h31.style.transform = "translateZ(100px)";
        h41.style.transform = "translateZ(100px)";
        circles1.style.transform = "translateZ(100px)";
    }
});

container2.addEventListener('mouseenter', e => {
    card2.style.transision = 'none';
    if ($(window).width() > 1366) {
        title2.style.transform = "translateZ(100px)";
        html2.style.transform = "translateZ(60px)";
        h32.style.transform = "translateZ(100px)";
        h42.style.transform = "translateZ(100px)";
        circles2.style.transform = "translateZ(100px)";
    }
});

container3.addEventListener('mouseenter', e => {
    card3.style.transision = 'none';
    if ($(window).width() > 1366) {
        title3.style.transform = "translateZ(100px)";
        html3.style.transform = "translateZ(60px)";
        h33.style.transform = "translateZ(100px)";
        h43.style.transform = "translateZ(100px)";
        circles3.style.transform = "translateZ(100px)";
    }
});

container4.addEventListener('mouseenter', e => {
    card4.style.transision = 'none';
    if ($(window).width() > 1366) {
        title4.style.transform = "translateZ(100px)";
        html4.style.transform = "translateZ(60px)";
        h34.style.transform = "translateZ(100px)";
        h44.style.transform = "translateZ(100px)";
        circles4.style.transform = "translateZ(100px)";
    }
});



container5.addEventListener('mouseenter', e => {
    card5.style.transision = 'none';
    if ($(window).width() > 1366) {
        title5.style.transform = "translateZ(100px)";
        html5.style.transform = "translateZ(60px)";
        h35.style.transform = "translateZ(100px)";
        h45.style.transform = "translateZ(100px)";
        circles5.style.transform = "translateZ(100px)";
    }
});

container6.addEventListener('mouseenter', e => {
    card6.style.transision = 'none';
    if ($(window).width() > 1366) {
        title6.style.transform = "translateZ(100px)";
        html6.style.transform = "translateZ(60px)";
        h36.style.transform = "translateZ(100px)";
        h46.style.transform = "translateZ(100px)";
        circles6.style.transform = "translateZ(100px)";
    }
});

container7.addEventListener('mouseenter', e => {
    card7.style.transision = 'none';
    if ($(window).width() > 1366) {
        title7.style.transform = "translateZ(100px)";
        html7.style.transform = "translateZ(60px)";
        h37.style.transform = "translateZ(100px)";
        h47.style.transform = "translateZ(100px)";
        circles7.style.transform = "translateZ(100px)";
    }
});

container8.addEventListener('mouseenter', e => {
    card8.style.transision = 'none';
    if ($(window).width() > 1366) {
        title8.style.transform = "translateZ(100px)";
        html8.style.transform = "translateZ(60px)";
        h38.style.transform = "translateZ(100px)";
        h48.style.transform = "translateZ(100px)";
        circles8.style.transform = "translateZ(100px)";
    }
});





container1.addEventListener('mouseleave', e => {
    card1.style.transision = 'all 0.5s ease';
    card1.style.transform = 'rotateY(0deg) rotateX(0deg)';
    title1.style.transform = "translateZ(0px)";
    html1.style.transform = "translateZ(0px) rotateZ(0)";
    h31.style.transform = "translateZ(0px)";
    h41.style.transform = "translateZ(0px)";
    circles1.style.transform = "translateZ(0px)";

});

container2.addEventListener('mouseleave', e => {
    card2.style.transision = 'all .5s ease';
    card2.style.transform = 'rotateY(0deg) rotateX(0deg)';
    title2.style.transform = "translateZ(0px)";
    html2.style.transform = "translateZ(0px) rotateZ(0)";
    h32.style.transform = "translateZ(0px)";
    h42.style.transform = "translateZ(0px)";
    circles2.style.transform = "translateZ(0px)";
});

container3.addEventListener('mouseleave', e => {
    card3.style.transision = 'all .5s ease';
    card3.style.transform = 'rotateY(0deg) rotateX(0deg)';
    title3.style.transform = "translateZ(0px)";
    html3.style.transform = "translateZ(0px) rotateZ(0)";
    h33.style.transform = "translateZ(0px)";
    h43.style.transform = "translateZ(0px)";
    circles3.style.transform = "translateZ(0px)";
});

container4.addEventListener('mouseleave', e => {
    card4.style.transision = 'all .5s ease';
    card4.style.transform = 'rotateY(0deg) rotateX(0deg)';
    title4.style.transform = "translateZ(0px)";
    html4.style.transform = "translateZ(0px) rotateZ(0)";
    h34.style.transform = "translateZ(0px)";
    h44.style.transform = "translateZ(0px)";
    circles4.style.transform = "translateZ(0px)";
});



container5.addEventListener('mouseleave', e => {
    card5.style.transision = 'all 0.5s ease';
    card5.style.transform = 'rotateY(0deg) rotateX(0deg)';
    title5.style.transform = "translateZ(0px)";
    html5.style.transform = "translateZ(0px) rotateZ(0)";
    h35.style.transform = "translateZ(0px)";
    h45.style.transform = "translateZ(0px)";
    circles5.style.transform = "translateZ(0px)";

});

container6.addEventListener('mouseleave', e => {
    card6.style.transision = 'all .5s ease';
    card6.style.transform = 'rotateY(0deg) rotateX(0deg)';
    title6.style.transform = "translateZ(0px)";
    html6.style.transform = "translateZ(0px) rotateZ(0)";
    h36.style.transform = "translateZ(0px)";
    h46.style.transform = "translateZ(0px)";
    circles6.style.transform = "translateZ(0px)";
});

container7.addEventListener('mouseleave', e => {
    card7.style.transision = 'all .5s ease';
    card7.style.transform = 'rotateY(0deg) rotateX(0deg)';
    title7.style.transform = "translateZ(0px)";
    html7.style.transform = "translateZ(0px) rotateZ(0)";
    h37.style.transform = "translateZ(0px)";
    h47.style.transform = "translateZ(0px)";
    circles7.style.transform = "translateZ(0px)";
});

container8.addEventListener('mouseleave', e => {
    card8.style.transision = 'all .5s ease';
    card8.style.transform = 'rotateY(0deg) rotateX(0deg)';
    title8.style.transform = "translateZ(0px)";
    html8.style.transform = "translateZ(0px) rotateZ(0)";
    h38.style.transform = "translateZ(0px)";
    h48.style.transform = "translateZ(0px)";
    circles8.style.transform = "translateZ(0px)";
});