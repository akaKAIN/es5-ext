'use strict';

var resolve   = require('path').resolve
  , indexTest = require('tad/lib/utils/index-test')

module.exports = indexTest(
	indexTest.readDir(resolve(__dirname, '../../lib/Array'))(function (o) {
		delete o.prototype;
		return o;
	}), "index");
