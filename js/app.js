( function () {
    'use strict';

    PD.namespace('PD.app');

    PD.app = {

        missiles: [],

        init: function () {
            console.log('init');
            PD.canvas.prepareCanvas();
            PD.app.missiles = this.makeMissiles();

            //start animation
	        PD.canvas.draw();
        },

        makeMissiles: function () {
            var missile1 = new PD.Missile();
            var missile2 = new PD.Missile();
            var missile3 = new PD.Missile();
            return [missile1, missile2, missile3];
        }
    };


    $(document).ready( function () { PD.app.init(); });

}());
