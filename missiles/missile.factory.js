( function () {
	'use strict';

	PD.namespace('PD.missileFactory');

	PD.missileFactory = ( function () {

		var validTypeMissiles = ['attacking', 'defending'],

			_setDefaultType = function (type) {
				if ( validTypeMissiles.indexOf(type) === -1 ) {
					return validTypeMissiles[0];
				} else {
					return type;
				}
			},

			createMissile = function (type) {

				type = _setDefaultType(type);

				switch (type) {
					case 'attacking':
						return new PD.MissileAttacking();
						break;
					case 'defending':
						return new PD.MissileDefending();
						break;
					default:
				}
			},

			createMissiles = function (type, number) {

				var missiles = [];

				for (var i = 0; i < number; i += 1) {
					missiles.push( createMissile(type) );
				}

				return missiles;
			};


		return {
			createMissile: createMissile,
			createMissiles: createMissiles
		};


	}());

} ());

