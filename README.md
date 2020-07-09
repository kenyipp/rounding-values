# rounding-values
Rounding the numbers in object and objects in array. Reference to [camelcase-keys](https://github.com/sindresorhus/camelcase-keys/blob/master/readme.md).

## Install
```sh
$ npm install --save rounding-values
```

## Usage
```js
"use strict";
const roundingValues = require("rounding-values");

const obj = { a: 1.2345 };
roundingValues(obj);
/*
	{
		"a": 1.23
	}
*/
const arr = [{ a: 1.2345, b: "1.2345" }];
roundingValues(obj, { decimal: 3 });
/*
	[
		{
			"a": 1.235,
			"b": "1.2345"
		}
	]
*/
const innerArr = [{ a: 1.2345, b: "1.2345", c: [{ a: 1.2345, b: "1.2345" }, { a: 1.2345, b: "1.2345" }] }];
roundingValues(innerArr, { decimal: 3, deep: true });
/*
	[
		{
			"a": 1.235,
			"b": "1.2345",
			"c": [
				{
					"a": 1.235,
					"b": "1.2345"
				},
				{
					"a": 1.235,
					"b": "1.2345"
				}
			]
		}
	]
*/
```

## API

### roundingValues(input, options?)

#### input

Type: `object | object[]`

An object or array of objects.

#### options

Type: `object`

##### decimal
Type: `number`\
Default: `2`

Number of decimal to rounding

##### deep

Type: `boolean`\
Default: `false`

Recurse nested objects and objects in arrays.
