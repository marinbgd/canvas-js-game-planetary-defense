( function () {
    'use strict';

    PD.namespace('PD.MissileDefending');

    PD.MissileDefending = ( function () {

        return function() {

	        //call Missile constructor
	        PD.Missile.call(this);

            this.type = 'defending';
	        this.color = '#0000ff';
        };

    }());

	//set inheritance
	PD.MissileDefending.prototype = Object.create(PD.Missile.prototype);
	PD.MissileDefending.prototype.constructor = PD.Missile;

}());

