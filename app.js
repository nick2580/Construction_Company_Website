/*document.getElementsByClassName('carousel-item').addEventListener('mouseover', function(){
    document.getElementsByClassName('fa-angle-left').style.color = '#4654A3';
    window.alert('yes')
})

document.getElementById('prevbn').addEventListener('mouseout', function(){
    document.getElementsByClassName('fa-angle-left').style.color = 'mintcream';
}) */

$(document).ready(function () {
    if (!$.browser.webkit) {
        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
    }
});

