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

        drawMissiles: function (missiles, defMissiles) {
            $.each(missiles, function (index, missile) {
	            if (missile) {
		            missile.draw(PD.canvas.ctx);
	            }
            });

	        $.each(defMissiles, function (index, missile2) {
		        if (missile2) {
			        missile2.draw(PD.canvas.ctx);
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
	        var defMissiles = PD.models.missiles.getDefMissiles();
	        if (missiles.length || defMissiles.length) {
		        PD.canvas.drawMissiles(missiles, defMissiles);
	        }

        }

    };

}());
