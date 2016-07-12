/*
 * convert-selector- lib/convert-selector
 * Copyright(c) 2016 ingpdw <ingpdw@gmail.com>
 */

'use strict';

exports = module.exports = function( str, type ) {
  let _str = ``, _selector = '.', _tmp = [], _type = [ 'id', 'class' ];
  if( !str ) return '';

  _str = str.split( ' ' );
  _selector = ( type == _type[ 0 ])? '#': '.';

  _str.forEach( ( item ) => {
    _tmp.push( _selector + item );
  });

  return _tmp.join( '' );
};
