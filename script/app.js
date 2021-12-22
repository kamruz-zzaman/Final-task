const path = document.getElementById('Opaque_Ring')
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

const drawWhenScroll = () => {
    const drawPath = pathLength - (pathLength * calcScrollPercent());
    console.log(drawPath);
    path.style.strokeDashoffset = drawPath;
}
const calcScrollPercent = () => {
    let height = window.document.getElementById('cont').scrollHeight - window.document.getElementById('cont').clientHeight;
    return window.document.getElementById('cont').scrollTop / height;
}
window.document.getElementById('cont').addEventListener('scroll', drawWhenScroll)

$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
});