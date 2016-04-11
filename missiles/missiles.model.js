( function () {
	'use strict';

	PD.namespace('PD.models.missiles');

	PD.models.missiles = ( function () {

		var missiles = [],
			defensiveMissiles = [],

			MISSILE_OF_SCREEN_EVENT = 'PD.models.missile.of.screen.event',
			NO_MISSILES_IN_AIR = 'PD.models.no.missiles.in.air.event',

			getMissiles = function () {
				return missiles;
			},

			getDefMissiles = function () {
				return defensiveMissiles;
			},

			destroyMissile = function (missileId) {
				for (var i = 0; i < missiles.length; i += 1) {
					if (missiles[i].id.toString() === missileId.toString()) {
						missiles.splice(i, 1);
					}
				}
			},

			makeAttackingMissiles = function (numberOfMissiles) {
				missiles = PD.missileFactory.createMissiles('attacking', numberOfMissiles);
			},

			makeDefensiveMissile = function (coor) {
				var missile = PD.missileFactory.createMissile('defensive', coor);
				defensiveMissiles.push(missile);
				missile.draw();
			},

			checkNumberOfMissiles = function () {
				if (!missiles.length) {
					var event = $.Event(NO_MISSILES_IN_AIR);
					$(document).trigger(event);
				}
			};


		return {
			getMissiles: getMissiles,
			getDefMissiles: getDefMissiles,
			destroyMissile: destroyMissile,
			makeAttackingMissiles: makeAttackingMissiles,
			checkNumberOfMissiles: checkNumberOfMissiles,
			makeDefensiveMissile: makeDefensiveMissile,

			MISSILE_OF_SCREEN_EVENT: MISSILE_OF_SCREEN_EVENT,
			NO_MISSILES_IN_AIR: NO_MISSILES_IN_AIR
		};

	}());

} ());

