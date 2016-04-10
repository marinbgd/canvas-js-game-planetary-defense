( function () {
    'use strict';

    PD.namespace('PD.util');

    PD.util = ( function () {

        var random = function (min, max) {
                return min + ( Math.random() * (max-min) ) ;
            },

            randomInt = function (min, max) {
                return Math.floor( Math.random() * (max - min + 1)) + min;
            },

            rad2deg = function (rad) {
                return rad * Math.PI/180;
            };

        return {
            random: random,
            randomInt: randomInt,
            rad2deg: rad2deg
        };

    }());

}());

