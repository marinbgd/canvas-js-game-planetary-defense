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
	            if (missile) {
		            missile.draw(PD.canvas.ctx);
	            }
            });
        },

        drawBackground: function (ctx) {
            var bgImage = new Image();
            bgImage.src = 'img/space.jpg';
            bgImage.onload = function(){
                ctx.drawImage(bgImage, 0, 0, 300, 300);
            }
        },

	    clear: function () {
		    this.drawBackground(this.ctx);
	    },

        draw: function () {
            requestAnimationFrame(PD.canvas.draw);
	        var missiles = PD.models.missiles.getMissiles();
	        if (missiles) {
		        PD.canvas.drawMissiles(missiles);
	        }

        }

    };

}());
