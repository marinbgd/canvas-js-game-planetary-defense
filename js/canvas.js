( function () {
    'use strict';

    PD.namespace('PD.canvas');

    PD.canvas = {

        canvas: null,
        ctx: null,
	    width: 300,
	    height: 300,

        prepareCanvas: function () {
            this.canvas = document.getElementById('mainCanvas');
            this.ctx = this.canvas.getContext('2d');
            this.drawBackground(this.ctx);
        },

        drawMissiles: function (missiles) {
            $.each(missiles, function (index, missile) {
                missile.draw(PD.canvas.ctx);
            });
        },

        drawBackground: function (ctx) {
            var bgImage = new Image();
            bgImage.src = 'img/space.jpg';
            bgImage.onload = function(){
                ctx.drawImage(bgImage, 0, 0, 300, 300);
            }
        },

        draw: function () {
            requestAnimationFrame(PD.canvas.draw);
            PD.canvas.drawMissiles(PD.app.missiles);
        }

    };

}());
