"use strict";

const mapObj = require("map-obj");

function rounding(number, decimal = 2) {
	let value = 1;
	for (let i = 0; i < decimal; i += 1) {
		value *= 10;
	}
	return Math.round((number + Number.EPSILON) * value) / value;
}

function has(array, key) {
	return array.some((x) => {
		if (typeof x === "string") {
			return x === key;
		}
		x.lastIndex = 0;
		return x.test(key);
	});
}

function isObject(value) {
	return typeof value === "object"
		&& value !== null
		&& !(value instanceof RegExp)
		&& !(value instanceof Error)
		&& !(value instanceof Date);
}

function roundingConvert(input, options) {
	const { exclude, deep, decimal = 2 } = options;
	function mapper(key, value) {
		if (deep && isObject(value)) {
			value = mapObj(value, mapper);
		}
		if (!(exclude && has(exclude, key)) && typeof value === "number") {
			value = rounding(value, decimal);
		}
		return [key, value];
	}
	return mapObj(input, mapper);
}

function roundingValues(input, options = {}) {
	if (Array.isArray(input)) {
		return input.map((item) => roundingValues(item, options));
	}
	if (typeof input === "number") {
		return rounding(input, options.decimal);
	}
	return roundingConvert(input, options);
}

module.exports = roundingValues;
