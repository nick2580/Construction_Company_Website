/*document.getElementsByClassName('card').addEventListener('mouseover', function(this){
    this.style.width = '300px';
    this.style.height = '390px';
});

document.getElementById('prevbn').addEventListener('mouseout', function(){
    document.getElementsByClassName('fa-angle-left').style.color = 'mintcream';
})
*/

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    });