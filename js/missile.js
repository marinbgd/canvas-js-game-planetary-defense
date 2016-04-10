( function () {
    'use strict';

    PD.namespace('PD.Missile');

    PD.Missile = ( function () {

        var missileCounter = 0;

        return function() {

            this.id = ++missileCounter;
            this.type = 'normal';
	        this.color = '#ff0000';

            this.speed = PD.util.random(1, 10);
            this.angle = PD.util.randomInt(60, 120);

            this.xOrigin = PD.util.randomInt(100, 200);
            this.yOrigin = 0;
            this.x = null;
            this.y = null;


        };

    }());


	PD.Missile.prototype._checkIfInCanvas = function () {
		var currentX = this.x || this.xOrigin;
		var currentY = this.y || this.yOrigin;

		var inCanvas = true;

		if (currentX >= PD.canvas.width || currentY >= PD.canvas.height) {
			inCanvas = false;
		}

		return inCanvas;
	};

	PD.Missile.prototype._calcNextXY = function () {
		//calc new coordinates
		var currentX = this.x || this.xOrigin;
		var currentY = this.y || this.yOrigin;


		var xTo;
		var yTo;

		var k = Math.tan(PD.util.rad2deg(this.angle));
		var dole = Math.sqrt( 1 + Math.pow(k, 2) );

		if (this.angle >= 0 && this.angle <= 90) {
			xTo = currentX + ( 1 / dole ) * this.speed;
			yTo = currentY + ( k / dole ) * this.speed;
		} else {
			xTo = currentX - ( 1 / dole ) * this.speed;
			yTo = currentY - ( k / dole ) * this.speed;
		}

		xTo = Math.floor(xTo);
		yTo = Math.floor(yTo);

		return {
			x: xTo,
			y: yTo
		};
	};

    PD.Missile.prototype.draw = function (ctx) {

	    if (!this._checkIfInCanvas()) { return false; }

        var nextPoint = this._calcNextXY();

        ctx.beginPath();
        ctx.moveTo(this.xOrigin, this.yOrigin);
        ctx.lineTo(nextPoint.x, nextPoint.y);
        ctx.strokeStyle = this.color;
        ctx.stroke();


        //update new coords
        this.updateXY(nextPoint.x, nextPoint.y);
    };

    PD.Missile.prototype.updateXY = function (x, y) {
        this.x = x;
        this.y = y;
    };

}());

