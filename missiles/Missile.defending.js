( function () {
    'use strict';

    PD.namespace('PD.MissileDefending');

    PD.MissileDefending = ( function () {

        return function(coor) {

	        //call Missile constructor
	        PD.Missile.call(this);

            this.type = 'defensive';
	        this.color = '#0000ff';

	        this.speed = null;
	        this.angle = null;

	        this.xOrigin = coor.x;
	        this.yOrigin = coor.y;

	        this.blastRadius = 14;

	        this.currentBlast = 0;
        };

    }());

	//set inheritance
	PD.MissileDefending.prototype = Object.create(PD.Missile.prototype);
	PD.MissileDefending.prototype.constructor = PD.Missile;


	PD.MissileDefending.prototype.draw = function (ctx) {

		if (this.currentBlast === this.blastRadius) {
			return;
		}

		ctx.beginPath();
		ctx.arc(this.xOrigin, this.yOrigin, ++this.currentBlast, 0, 2 * Math.PI);
		ctx.strokeStyle = '#fff';
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.stroke();
	};

}());

