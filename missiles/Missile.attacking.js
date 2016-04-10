( function () {
    'use strict';

    PD.namespace('PD.MissileAttacking');

    PD.MissileAttacking = ( function () {

        return function() {

	        //call Missile constructor
	        PD.Missile.call(this);

            this.type = 'attacking';
	        this.color = '#ff0000';
        };

    }());

	//set inheritance
	PD.MissileAttacking.prototype = Object.create(PD.Missile.prototype);
	PD.MissileAttacking.prototype.constructor = PD.Missile;

}());

