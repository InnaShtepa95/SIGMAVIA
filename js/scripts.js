(function () {
    'use strict';

    var init = function () {



        var slider3 = new rSlider({
            target: '#slider3',
            values: {min: 0, max: 2000},
            step: 1,
            range: true,
            set: [100, 1000],
            scale: true,
            // labels: true,

            //set:    null, // an array of preselected values
            width:    null,
            // labels:   true,
            tooltip:  true,
            onChange: function (vals) {
                console.log(vals);
            }
        });


    };
    window.onload = init;
})();


if(window.devicePixelRatio > 1){
    var multiplier = window.devicePixelRatio;
    var images = document.querySelectorAll('img.optimizer');
    images.forEach(function(el){
        var sizeX = el.width;
        var sizeY = el.height;
        var imageType = el.src.substr(-4);
        var imageName = el.src.substr(0, el.src.length - 4);
        //imageName += "_x" + multiplier + imageType;
        imageName += "@" + multiplier + 'x' + imageType;
        var newImg = new Image();
        newImg.src = imageName;
        newImg.onload = function() {
            el.src = imageName;
            el.width = sizeX;
            el.height = sizeY;
        }
    });
};

$(document).ready(function(){
    $("table").clone().appendTo('.somnewtable');
});
