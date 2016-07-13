/*
 * convert-selector- lib/convert-selector
 * Copyright(c) 2016 ingpdw <ingpdw@gmail.com>
 */

'use strict';

exports = module.exports = function( str, type ) {
  let _str = ``, _selector = '.', _tmp = [], _type = [ 'id', 'class' ];
  if( !str ) return '';

  let child = '>';

  let isObject = ( obj ) => {
    return ( typeof( obj ) == 'object' )? true: false;
  }

  if( str instanceof Array ){
    for( let item of str ){
      if( isObject( item ) ){
        _selector = ( item.type == _type[ 0 ])? '#': '.';
        _tmp.push( _selector + item.name );
      }else{
        _tmp.push( ( item == child )? ' ': '.' + item );
      }
    }
  }else if( str instanceof Object ){
    _selector = ( str.type == _type[ 0 ])? '#': '.';
    _tmp.push( _selector + str.name );
  }else{
    _str = str.split( ' ' );
    _selector = ( type == _type[ 0 ])? '#': '.';

    _str.forEach( ( item ) => {
      _tmp.push( ( item == child )? ' ': _selector + item );
    });
  }

  return _tmp.join( '' );
};
