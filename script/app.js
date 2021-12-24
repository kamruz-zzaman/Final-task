const svgSec = document.getElementById('svgSec')
const contentSec = document.getElementById('contentSec')
const firstContent = document.getElementById('firstContent')
const svgPath = document.getElementById('svgPath')

const dotsfill1 = document.getElementById('dotsfill1')
const dotsfill2 = document.getElementById('dotsfill2')
const dotsfill3 = document.getElementById('dotsfill3')
const dotsfill4 = document.getElementById('dotsfill4')
const dotsfill5 = document.getElementById('dotsfill5')
const dotsfill6 = document.getElementById('dotsfill6')
const dotsfill7 = document.getElementById('dotsfill7')
const img11 = document.getElementById('img11')
const img12 = document.getElementById('img12')
const img13 = document.getElementById('img13')
const img14 = document.getElementById('img14')
const img15 = document.getElementById('img15')
const img21 = document.getElementById('img21')
const img22 = document.getElementById('img22')
const img31 = document.getElementById('img31')
const img32 = document.getElementById('img32')
const img41 = document.getElementById('img41')
const img42 = document.getElementById('img42')
const img51 = document.getElementById('img51')
const img52 = document.getElementById('img52')
const img53 = document.getElementById('img53')
const img54 = document.getElementById('img54')
const img55 = document.getElementById('img55')
const img61 = document.getElementById('img61')
const img72 = document.getElementById('img72')

const path = document.getElementById('Opaque_Ring')
const pathLength = path.getTotalLength();


path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

const drawWhenScroll = () => {
    const drawPath = pathLength - (pathLength * calcScrollPercent());
    console.log(drawPath);
    // 1st div
    if (drawPath == 815.8143310546875) {
        dotsfill1.style.opacity = 1;
        dotsfill2.style.opacity = 0;
        dotsfill3.style.opacity = 0;
        dotsfill4.style.opacity = 0;
        dotsfill5.style.opacity = 0;
        dotsfill6.style.opacity = 0;
        dotsfill7.style.opacity = 0;
        img11.classList.add("img22A")
        img12.classList.add("animate__fadeInUp")
        img13.classList.add("animate__fadeInDown")
        img14.classList.add("animate__fadeInDown")
        img15.classList.add("animate__fadeInUp")

        if (img21.classList.contains("animate__fadeInUp")) {
            img21.classList.remove("animate__fadeInUp")
        }
        if (img22.classList.contains("animate__fadeInDown")) {
            img22.classList.remove("animate__fadeInDown")
        }

        firstContent.style.backgroundColor = 'rgb(34, 47, 66)'
        svgPath.style.backgroundColor = 'rgb(34, 47, 66)'
        svgSec.innerHTML = `
        <div class=" text-light align-div1-text">
        <h5 class='animate__animated animate__fadeInUp'>Redefining</h5>
        <h1 class='animate__animated animate__fadeInUp'>UX Strategy</h1>
        <h5 class="contentBottom text-end">and UI design</h5>
        </div>`;
        contentSec.innerHTML = `
        <div class=''>
        <h1 class='animate__animated animate__fadeInDown'>ABC 456</h1>
        <div class="animate__animated animate__fadeIn">
        <span>We are the best</span><br>
        <span>web development company</span><br>
        <span>in the world</span>
        </div>
        <br>
        <div class="d-flex justify-content-between">
            <p class="animate__animated animate__zoomIn">Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div></div>`;
    }
    // 2nd div
    else if (drawPath == 679.8452758789062) {
        dotsfill1.style.opacity = 1;
        dotsfill2.style.opacity = 1;
        dotsfill3.style.opacity = 0;
        dotsfill4.style.opacity = 0;
        dotsfill5.style.opacity = 0;
        dotsfill6.style.opacity = 0;
        dotsfill7.style.opacity = 0;

        img21.classList.add("animate__fadeInUp")
        img22.classList.add("animate__fadeInDown")

        if (img31.classList.contains("animate__fadeInUp")) {
            img31.classList.remove("animate__fadeInUp")
        }
        if (img32.classList.contains("animate__fadeInDown")) {
            img32.classList.remove("animate__fadeInDown")
        }

        firstContent.style.backgroundColor = '#110e3d'
        svgPath.style.backgroundColor = '#110e3d'
        svgSec.innerHTML = `
        <div class="contentAnimation text-light align-div1-text">
        <h5>Powered by advance</h5>
        <img width='100%' class='animate__animated animate__fadeInDown my-2' src="/ScrollAnimation Task Assets/nasa-mobile-app.png" alt="">
        <h5 class="contentBottom text-end">algorithms</h5>
        </div>`;
        contentSec.innerHTML = `
        <div class=''>
        <h1 class='animate__animated animate__fadeInDown'>ABC 345</h1>
        <div class="animate__animated animate__fadeIn">
        <span>We are the best</span><br>
        <span>web development company</span><br>
        <span>in the world</span>
        </div>
        <br>
        <div class="mt-4 d-flex justify-content-between">
            <p class='svgtext1 animate__animated animate__zoomIn'>coming soon</p>
            <p class="me-5">SKIP</p>
        </div></div>`;
        img11.classList.remove("img22A")
        img12.classList.remove("animate__fadeInUp")
        img13.classList.remove("animate__fadeInDown")
        img14.classList.remove("animate__fadeInDown")
        img15.classList.remove("animate__fadeInUp")
    }
    // 3rd div
    else if (drawPath == 543.876220703125) {
        dotsfill1.style.opacity = 1;
        dotsfill2.style.opacity = 1;
        dotsfill3.style.opacity = 1;
        dotsfill4.style.opacity = 0;
        dotsfill5.style.opacity = 0;
        dotsfill6.style.opacity = 0;
        dotsfill7.style.opacity = 0;

        img31.classList.add("animate__fadeInUp")
        img32.classList.add("animate__fadeInDown")
        if (img41.classList.contains("img41A")) {
            img41.classList.remove("img41A")
        }
        if (img42.classList.contains("img42A")) {
            img42.classList.remove("img42A")
        }

        firstContent.style.backgroundColor = '#393299'
        svgPath.style.backgroundColor = '#393299'
        svgSec.innerHTML = `
        <div class=" text-light align-div1-text">
        <h5 class="animate__animated animate__fadeInDown">The Next Big</h5>
        <h1 class="animate__animated animate__fadeInDown">Blockchain</h1>
        <h5 class="contentBottom text-end">Revolution</h5>
        </div>`;
        contentSec.innerHTML = `
        <div>
        <h1 class='animate__animated animate__fadeInUp'>ABC 235</h1>
        <div class='animate__animated animate__fadeIn'>
        <span>We are the best web development</span><br>
        <span> company in the world</span>
        </div>
        <br>
        <div class="mt-4 d-flex justify-content-between">
            <p class='svgtext1 animate__animated animate__zoomIn'>coming soon</p>
            <p class="me-5">SKIP</p>
        </div></div>`;
        img21.classList.remove("animate__fadeInUp")
        img22.classList.remove("animate__fadeInDown")
    }
    // 4th div
    else if (drawPath == 407.90716552734375) {
        dotsfill1.style.opacity = 1;
        dotsfill2.style.opacity = 1;
        dotsfill3.style.opacity = 1;
        dotsfill4.style.opacity = 1;
        dotsfill5.style.opacity = 0;
        dotsfill6.style.opacity = 0;
        dotsfill7.style.opacity = 0;

        img41.classList.add("img41A")
        img42.classList.add("img42A")

        if (img51.classList.contains("animate__fadeInDown")) {
            img51.classList.remove("animate__fadeInDown")
        }
        if (img52.classList.contains("animate__fadeInUp")) {
            img52.classList.remove("animate__fadeInUp")
        }
        if (img53.classList.contains("animate__fadeInDown")) {
            img53.classList.remove("animate__fadeInDown")
        }
        if (img54.classList.contains("animate__fadeInUp")) {
            img54.classList.remove("animate__fadeInUp")
        }
        if (img55.classList.contains("img55A")) {
            img55.classList.remove("img55A")
        }

        firstContent.style.backgroundColor = '#5c298b'
        svgPath.style.backgroundColor = '#5c298b'
        svgSec.innerHTML = `
        <div class=" text-light align-div2-text">
        <h1 class="animate__animated animate__fadeInUp">25M+ Downloads</h1>
        <h5 class="animate__animated animate__fadeInDown text-end">on appstore & googlr playstore</h5>
        </div>`;
        contentSec.innerHTML = `
        <div class=''>
        <img width='200px' class='mb-3' src="/ScrollAnimation Task Assets/world-communication-awards-for-best-digital-experience.png" alt="">
        <h1 class='animate__animated animate__fadeInDown'>ABC 235</h1>
        <div class='animate__animated animate__fadeIn'>
        <span>We are the best web development</span><br>
        <span> company in the world</span>
        </div>
        <br>
        <div class="mt-4 d-flex justify-content-between">
            <p class='animate__animated animate__zoomIn'>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div></div>`;
        img31.classList.remove("animate__fadeInUp")
        img32.classList.remove("animate__fadeInDown")
    }
    // 5th div
    else if (drawPath == 271.9381103515625) {
        dotsfill1.style.opacity = 1;
        dotsfill2.style.opacity = 1;
        dotsfill3.style.opacity = 1;
        dotsfill4.style.opacity = 1;
        dotsfill5.style.opacity = 1;
        dotsfill6.style.opacity = 0;
        dotsfill7.style.opacity = 0;
        img51.classList.add("animate__fadeInDown")
        img52.classList.add("animate__fadeInUp")
        img53.classList.add("animate__fadeInDown")
        img54.classList.add("animate__fadeInUp")
        img55.classList.add("img55A")
        if (img61.classList.contains("img21A")) {
            img61.classList.remove("img21A")
        }
        firstContent.style.backgroundColor = '#1c5aac'
        svgPath.style.backgroundColor = '#1c5aac'
        svgSec.innerHTML = `
        <div class="text-light align-div4-text">
        <h5 class='animate__animated animate__fadeInUp'>Text Headline</h5>
        <h1 class='animate__animated animate__fadeInUp'>Text Headline</h1>
        <h5 class="contentBottom text-end">Footer headline</h5>
        </div>`;
        contentSec.innerHTML = `
        <div class=''>
        <h1 class='animate__animated animate__fadeInDown'>ABC 567</h1>
        <div class='class='animate__animated animate__fadeIn'> 
        <div class='animate__animated animate__fadeIn'>
        <span>We are the best web development</span><br>
        <span> company in the world</span><br>
        </div>
        <div class="mt-4 d-flex justify-content-between">
            <p class='animate__animated animate__zoomIn'>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div></div>`;
        img41.classList.remove("img41A")
        img42.classList.remove("img42A")
    }
    // 6th div
    else if (drawPath == 135.96905517578125) {
        dotsfill1.style.opacity = 1;
        dotsfill2.style.opacity = 1;
        dotsfill3.style.opacity = 1;
        dotsfill4.style.opacity = 1;
        dotsfill5.style.opacity = 1;
        dotsfill6.style.opacity = 1;
        dotsfill7.style.opacity = 0;
        if (img72.classList.contains("img72A")) {

            img72.classList.remove("img72A")
        }
        img61.classList.add("img21A")
        firstContent.style.backgroundColor = '#1c32ac'
        svgPath.style.backgroundColor = '#1c32ac'
        svgSec.innerHTML = `
        <div class="contentAnimation text-light align-div3-text">
        <h5 class="text-start">Developing ERP solution for</h5>
        <h1>Text Headline</h1>
        <h5 class="contentBottom text-end">in furniture industry</h5>
        </div>
        `;
        contentSec.innerHTML = `
        <div class=''>
        <h1 class='animate__animated animate__fadeInUp'>ABC 678</h1>
        <div class="animate__animated animate__fadeIn">
        <span>Best since 2007</span><br>
        <span>We offer wide range of</span><br>
        <span>web and app developing</span><br>
        </div>
        <br>
        <div class="mt-4 d-flex justify-content-between">
            <p class='animate__animated animate__zoomIn'>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div></div>`;
        img51.classList.remove("animate__fadeInDown")
        img52.classList.remove("animate__fadeInUp")
        img53.classList.remove("animate__fadeInDown")
        img54.classList.remove("animate__fadeInUp")
        img55.classList.remove("img55A")
    }
    // 7th div
    else if (drawPath == 0) {
        dotsfill1.style.opacity = 1;
        dotsfill2.style.opacity = 1;
        dotsfill3.style.opacity = 1;
        dotsfill4.style.opacity = 1;
        dotsfill5.style.opacity = 1;
        dotsfill6.style.opacity = 1;
        dotsfill7.style.opacity = 1;

        img72.classList.add("img72A")
        firstContent.style.backgroundColor = '#0d9b65'
        svgPath.style.backgroundColor = '#0d9b65'
        svgSec.innerHTML = `
        <div class=" text-light align-div1-text">
        <h5 class="text-start animate__animated animate__fadeInUp">Biggest classifieds</h5>
        <h1 class="text-end animate__animated animate__fadeInUp">East Asia</h1>
        <h5 class="contentBottom text-end">Countries</h5>
        </div>`;
        contentSec.innerHTML = `
        <div class=''>
        <img width='200px' class='mb-3' src="/ScrollAnimation Task Assets/world-communication-awards-for-best-digital-experience.png" alt="">
        <h1 class="animate__animated animate__fadeInDown">ABC 23478</h1>
        <div class="animate__animated animate__fadeIn">
        <span>We are the best <br> web development</span><br>
        <span> company in the world</span>
        </div>
        <br>
        <div class="d-flex justify-content-between">
            <p  class='svgtext2 animate__animated animate__zoomIn'>coming soon</p>
            <p class="me-5">SKIP</p>
        </div>
        </div>
        `;
        img61.classList.remove("img21A")

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
