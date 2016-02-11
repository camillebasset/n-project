var square = document.querySelector('#square'),
    menu   = document.querySelector('#menu');

square.style.transition = "all 0.3s";

$( "#square" ).mouseenter(function() {
    square.style.fillOpacity = '0.75';
    menu.style.opacity = '1';
});

$( "#square" ).mouseleave(function() {
    if($("#menu").is(":hover")) {

    } else {
        square.style.fillOpacity = '0';
        menu.style.opacity = '0';
    }
});
