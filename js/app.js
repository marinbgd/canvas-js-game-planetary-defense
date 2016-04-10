( function () {
    'use strict';

    PD.namespace('PD.app');

    PD.app = {

        init: function () {
            PD.canvas.prepareCanvas();

	        //make attacking missiles
	        PD.models.missiles.makeAttackingMissiles(5);

	        //listen for missile events
	        $(document).on(PD.models.missiles.MISSILE_OF_SCREEN_EVENT, this._missileOfScreenHandler);
	        $(document).on(PD.models.missiles.NO_MISSILES_IN_AIR, this._noMissilesInAirHandler);


            //start animation
	        PD.canvas.draw();
        },

	    _missileOfScreenHandler: function (event, missile) {
		    PD.models.missiles.destroyMissile(missile.id);
		    PD.models.missiles.checkNumberOfMissiles();
	    },

	    _noMissilesInAirHandler: function () {
		    PD.canvas.clear();
		    PD.models.missiles.makeAttackingMissiles(5);
	    }

    };


    $(document).ready( function () { PD.app.init(); });

}());
