// Same as rcurry, except only applies the function when all n arguments are
// saturated.
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var slice = Array.prototype.slice
  , curry = require('./curry')

  , hold = function hold (fn, n, args) {
		args = slice.call(arguments, 3, 3 + n - args.length).concat(args);
		return args.length === n ? fn.apply(this, args) : hold.curry(fn, n, args);
	};

hold.curry = curry;

module.exports = function (n) {
	return hold.curry(this, n, slice.call(arguments, 1).slice(0, n));
};