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
