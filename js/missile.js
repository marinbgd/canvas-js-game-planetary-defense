( function () {
    'use strict';

    PD.namespace('PD.Missile');

    PD.Missile = ( function () {

        var missileCounter = 0;

        return function() {

            this.id = ++missileCounter;
            this.type = 'normal';

            this.speed = PD.util.random(1, 10);
            this.angle = PD.util.randomInt(60, 120);

            this.xOrigin = PD.util.randomInt(100, 200);
            this.yOrigin = 0;
            this.x = null;
            this.y = null;
        };

    }());

    PD.Missile.prototype.draw = function (ctx) {

        //calc new coordinates
        var currentX = this.x || this.xOrigin;
        var currentY = this.y || this.yOrigin;

        var k = Math.tan(PD.util.rad2deg(this.angle));
        var dole = Math.sqrt( 1 + Math.pow(k, 2) );

        var xTo;
        var yTo;
        if (this.angle >= 0 && this.angle <= 90) {
            xTo = currentX + ( 1 / dole ) * this.speed;
            yTo = currentY + ( k / dole ) * this.speed;
        } else {
            xTo = currentX - ( 1 / dole ) * this.speed;
            yTo = currentY - ( k / dole ) * this.speed;
        }


        xTo = Math.floor(xTo);
        yTo = Math.floor(yTo);


        ctx.beginPath();
        ctx.moveTo(this.xOrigin, this.yOrigin);
        ctx.lineTo(xTo, yTo);
        ctx.fill();
        ctx.stroke();


        //update new coords
        this.updateCoors(xTo, yTo);
    };

    PD.Missile.prototype.updateCoors = function (x, y) {
        this.x = x;
        this.y = y;
    };

}());

