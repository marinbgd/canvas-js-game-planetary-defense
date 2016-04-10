( function () {
    'use strict';

    PD.namespace('PD.app');

    PD.app = {

        canvas: null,
        ctx: null,

        missiles: [],

        init: function () {
            console.log('init');
            this.prepareCanvas();
            PD.app.missiles = this.makeMissiles();

            //start animation
            this.draw();
        },

        prepareCanvas: function () {

            this.canvas = document.getElementById('mainCanvas');
            this.ctx = this.canvas.getContext('2d');

            this.ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            this.ctx.fillRect (0, 0, 300, 300);
        },

        makeMissiles: function () {
            var missile1 = new PD.Missile();
            var missile2 = new PD.Missile();
            var missile3 = new PD.Missile();
            return [missile1, missile2, missile3];
        },

        drawMissiles: function () {

            $.each(PD.app.missiles, function (index, missile) {
                missile.draw(PD.app.ctx);
            });

        },

        draw: function () {

            requestAnimationFrame(PD.app.draw);
            PD.app.drawMissiles();

        }

    };


    $(document).ready( function () { PD.app.init(); });

}());
