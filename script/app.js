const svgSec = document.getElementById('svgSec')
const contentSec = document.getElementById('contentSec')
const firstContent = document.getElementById('firstContent')
const svgPath = document.getElementById('svgPath')

const path = document.getElementById('Opaque_Ring')
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

const drawWhenScroll = () => {
    const drawPath = pathLength - (pathLength * calcScrollPercent());
    console.log(drawPath);
    if (drawPath == 815.8143310546875) {
        firstContent.style.backgroundColor = 'rgb(34, 47, 66)'
        svgPath.style.backgroundColor = 'rgb(34, 47, 66)'
        svgSec.innerHTML = `
        <div class="text-light align-div1-text">
        <h5>Redefining</h5>
        <h1>UX Strategy</h1>
        <h5 class="text-end">and UI design</h5>
        </div>`;
        contentSec.innerHTML = `
        <h1>ABC 456</h1>
        <span>We are the best</span><br>
        <span>web development company</span><br>
        <span>in the world</span><br><br>
        <div class="d-flex justify-content-between">
            <p>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div>`;
    }
    else if (drawPath == 679.8452758789062) {
        firstContent.style.backgroundColor = '#110e3d'
        svgPath.style.backgroundColor = '#110e3d'
        svgSec.innerHTML = `<div class="text-light align-div1-text">
        <h5>Powered by advance</h5>
        <img width='250px' src="/ScrollAnimation Task Assets/nasa-mobile-app.png" alt="">
        <h5 class="text-end">algorithms</h5>
        </div>`;
        contentSec.innerHTML = `
        <h1>ABC 345</h1>
        <span>We are the best</span><br>
        <span>web development company</span><br>
        <span>in the world</span><br>
        <div class="mt-4 d-flex justify-content-between">
            <p class='svgtext1'>coming soon</p>
            <p class="me-5">SKIP</p>
        </div>`;
    }
    else if (drawPath == 543.876220703125) {
        firstContent.style.backgroundColor = '#393299'
        svgPath.style.backgroundColor = '#393299'
        svgSec.innerHTML = `
        <div class="text-light align-div1-text">
        <h5>The Next Big</h5>
        <h1>Blockchain</h1>
        <h5 class="text-end">Revolution</h5>
        </div>`;
        contentSec.innerHTML = `
        <h1>ABC 235</h1>
        <span>We are the best web development</span><br>
        <span> company in the world</span><br>
        <div class="mt-4 d-flex justify-content-between">
            <p class='svgtext1'>coming soon</p>
            <p class="me-5">SKIP</p>
        </div>`;
    }
    else if (drawPath == 407.90716552734375) {
        firstContent.style.backgroundColor = '#5c298b'
        svgPath.style.backgroundColor = '#5c298b'
        svgSec.innerHTML = `
        <div class="text-light align-div2-text">
        <h1>25M+ Downloads</h1>
        <h5 class="text-end">on appstore & googlr playstore</h5></div>`;
        contentSec.innerHTML = `
        <img width='200px' class='mb-3' src="/ScrollAnimation Task Assets/world-communication-awards-for-best-digital-experience.png" alt="">
        <h1>ABC 235</h1>
        <span>We are the best web development</span><br>
        <span> company in the world</span><br>
        <div class="mt-4 d-flex justify-content-between">
            <p>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div>`;
    }
    else if (drawPath == 271.9381103515625) {
        firstContent.style.backgroundColor = '#1c5aac'
        svgPath.style.backgroundColor = '#1c5aac'
        svgSec.innerHTML = `
        <div class="text-light align-div4-text">
        <h5>Text Headline</h5>
        <h1>Text Headline</h1>
        <h5 class="text-end">Footer headline</h5>
        </div>`;
        contentSec.innerHTML = `
        <h1>ABC 567</h1>
        <span>We are the best web development</span><br>
        <span> company in the world</span><br>
        <div class="mt-4 d-flex justify-content-between">
            <p>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div>`;
    }
    else if (drawPath == 135.96905517578125) {
        firstContent.style.backgroundColor = '#1c32ac'
        svgPath.style.backgroundColor = '#1c32ac'
        svgSec.innerHTML = `
        <div class="text-light align-div3-text">
        <h5>Developing ERP solution for</h5>
        <h1>Text Headline</h1>
        <h5 class="text-end">in furniture industry</h5>
        </div>
        `;
        contentSec.innerHTML = `
        <h1>ABC 678</h1>
        <span>Best since 2007</span><br>
        <span>We offer wide range of</span><br>
        <span>web and app developing</span><br><br>
        <div class="mt-4 d-flex justify-content-between">
            <p>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div>`;
    }
    else if (drawPath == 0) {
        firstContent.style.backgroundColor = '#0d9b65'
        svgPath.style.backgroundColor = '#0d9b65'
        svgSec.innerHTML = `<div class="text-light align-div1-text">
        <h5 class="text-end">Biggest classifieds</h5>
        <h1 class="text-end">East Asia</h1>
        <h5 class="text-end">Countries</h5>
        </div>`;
        contentSec.innerHTML = `
        <img width='200px' class='mb-3' src="/ScrollAnimation Task Assets/world-communication-awards-for-best-digital-experience.png" alt="">
        <h1>ABC 23478</h1>
        <span>We are the best <br> web development</span><br>
        <span> company in the world</span><br>
        <div class="mt-4 d-flex justify-content-between">
            <p class='svgtext1'>coming soon</p>
            <p class="me-5">SKIP</p>
        </div>`;
    }
    path.style.strokeDashoffset = drawPath;
}
const calcScrollPercent = () => {
    let height = window.document.getElementById('cont').scrollHeight - window.document.getElementById('cont').clientHeight;
    return window.document.getElementById('cont').scrollTop / height;
}
window.document.getElementById('cont').addEventListener('scroll', drawWhenScroll)
// window.document.getElementById('cont').addEventListener('scroll', (e)=>{console.log(e)})
$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
});
