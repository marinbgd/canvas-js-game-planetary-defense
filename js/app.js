( function () {
    'use strict';

    PD.namespace('PD.app');

    PD.app = {

        missiles: [],

        init: function () {
            console.log('init');
            PD.canvas.prepareCanvas();
            PD.app.missiles = this.makeAttackingMissiles(5);

            //start animation
	        PD.canvas.draw();
        },

	    makeAttackingMissiles: function (numberOfMissiles) {
	        return PD.missileFactory.createMissiles('attacking', numberOfMissiles);
        }
    };


    $(document).ready( function () { PD.app.init(); });

}());
