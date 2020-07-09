"use strict";

declare namespace roundingValues {

	interface Options {
		/**
		Recurse nested objects and objects in arrays.
		@default false
		*/
		readonly deep?: boolean;

		/**
		Exclude keys from being rounding.
		@default []
		*/
		readonly exclude?: ReadonlyArray<string | RegExp>;

		/**
		The decimal place for rounding
		@default 2
		*/
		readonly decimal?: number;
	}
}

declare function roundingValues<T extends ReadonlyArray<{ [key: string]: any }>>(
	input: T,
	options?: roundingValues.Options,
): T;

declare function roundingValues<T extends { [key: string]: any }>(
	input: T,
	options?: roundingValues.Options,
): T;

declare function roundingValues<number>(
	input: number,
	options?: roundingValues.Options,
): number;

export = roundingValues;
