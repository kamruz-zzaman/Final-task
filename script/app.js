const svgSec = document.getElementById('svgSec')
const contentSec = document.getElementById('contentSec')

const path = document.getElementById('Opaque_Ring')
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

const drawWhenScroll = () => {
    const drawPath = pathLength - (pathLength * calcScrollPercent());
    console.log(drawPath);
    if (drawPath == 815.8143310546875) {
        svgSec.innerHTML=`<h5>1</h5>
        <h1>1</h1>
        <h5 class="text-end">1</h5>`;
        contentSec.innerHTML=`<h1>ABC 456</h1>
        <span>We are the best</span><br>
        <span>web development company</span><br>
        <span>in the world</span><br><br>
        <div class="d-flex justify-content-between">
            <p>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div>`;
    } 
    else if(drawPath == 679.8452758789062){
        svgSec.innerHTML=`<h5>2</h5>
        <h1>2</h1>
        <h5 class="text-end">2</h5>`;
        contentSec.innerHTML=`<h1>ABC 456</h1>
        <span>We are the best</span><br>
        <span>web development company</span><br>
        <span>in the world</span><br><br>
        <div class="d-flex justify-content-between">
            <p>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div>`;
    }
    else if(drawPath == 543.876220703125){
        svgSec.innerHTML=`<h5>3</h5>
        <h1>3</h1>
        <h5 class="text-end">3</h5>`;
        contentSec.innerHTML=`<h1>ABC 456</h1>
        <span>We are the best</span><br>
        <span>web development company</span><br>
        <span>in the world</span><br><br>
        <div class="d-flex justify-content-between">
            <p>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div>`;
    }
    else if(drawPath == 407.90716552734375){
        svgSec.innerHTML=`<h5>4</h5>
        <h1>4</h1>
        <h5 class="text-end">4</h5>`;
        contentSec.innerHTML=`<h1>ABC 456</h1>
        <span>We are the best</span><br>
        <span>web development company</span><br>
        <span>in the world</span><br><br>
        <div class="d-flex justify-content-between">
            <p>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div>`;
    }
    else if(drawPath == 271.9381103515625){
        svgSec.innerHTML=`<h5>5</h5>
        <h1>5</h1>
        <h5 class="text-end">5</h5>`;
        contentSec.innerHTML=`<h1>ABC 456</h1>
        <span>We are the best</span><br>
        <span>web development company</span><br>
        <span>in the world</span><br><br>
        <div class="d-flex justify-content-between">
            <p>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div>`;
    }
    else if(drawPath == 135.96905517578125){
        svgSec.innerHTML=`<h5>6</h5>
        <h1>6</h1>
        <h5 class="text-end">6</h5>`;
        contentSec.innerHTML=`<h1>ABC 456</h1>
        <span>We are the best</span><br>
        <span>web development company</span><br>
        <span>in the world</span><br><br>
        <div class="d-flex justify-content-between">
            <p>Vew cose study <i class="fas fa-arrow-right"></i></p>
            <p class="me-5">SKIP</p>
        </div>`;
    }
    else if(drawPath == 0){
        svgSec.innerHTML=`<h5>7</h5>
        <h1>7</h1>
        <h5 class="text-end">7</h5>`;
        contentSec.innerHTML=`<h1>ABC 456</h1>
        <span>We are the best</span><br>
        <span>web development company</span><br>
        <span>in the world</span><br><br>
        <div class="d-flex justify-content-between">
            <p>Vew cose study <i class="fas fa-arrow-right"></i></p>
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
