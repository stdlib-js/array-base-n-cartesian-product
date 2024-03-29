/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isArrayArray = require( '@stdlib/assert-is-array-array' );
var zeroTo = require( '@stdlib/array-base-zero-to' );
var pkg = require( './../package.json' ).name;
var nCartesianProduct = require( './../lib' );


// MAIN //

bench( pkg+':narrays=2,len=100', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = zeroTo( 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = nCartesianProduct( x, x );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArrayArray( v ) ) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':narrays=3,len=100', function benchmark( b ) {
	var x;
	var y;
	var i;
	var v;

	x = zeroTo( 10 );
	y = [ 1 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = nCartesianProduct( x, x, y );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArrayArray( v ) ) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':narrays=4,len=100', function benchmark( b ) {
	var x;
	var y;
	var i;
	var v;

	x = zeroTo( 10 );
	y = [ 1 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = nCartesianProduct( x, x, y, y );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArrayArray( v ) ) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':narrays=5,len=100', function benchmark( b ) {
	var x;
	var y;
	var i;
	var v;

	x = zeroTo( 10 );
	y = [ 1 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = nCartesianProduct( x, x, y, y, y );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArrayArray( v ) ) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':narrays=6,len=100', function benchmark( b ) {
	var x;
	var y;
	var i;
	var v;

	x = zeroTo( 10 );
	y = [ 1 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = nCartesianProduct( x, x, y, y, y, y );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArrayArray( v ) ) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':narrays=7,len=100', function benchmark( b ) {
	var x;
	var y;
	var i;
	var v;

	x = zeroTo( 10 );
	y = [ 1 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = nCartesianProduct( x, x, y, y, y, y, y );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArrayArray( v ) ) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':narrays=8,len=100', function benchmark( b ) {
	var x;
	var y;
	var i;
	var v;

	x = zeroTo( 10 );
	y = [ 1 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = nCartesianProduct( x, x, y, y, y, y, y, y );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArrayArray( v ) ) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':narrays=9,len=100', function benchmark( b ) {
	var x;
	var y;
	var i;
	var v;

	x = zeroTo( 10 );
	y = [ 1 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = nCartesianProduct( x, x, y, y, y, y, y, y, y );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArrayArray( v ) ) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':narrays=10,len=100', function benchmark( b ) {
	var x;
	var y;
	var i;
	var v;

	x = zeroTo( 10 );
	y = [ 1 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = nCartesianProduct( x, x, y, y, y, y, y, y, y, y );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArrayArray( v ) ) {
		b.fail( 'should return an array of arrays' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
