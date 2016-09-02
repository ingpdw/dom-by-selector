/*
 *  Dom-by-selector- lib/ Dom-by-selector
 * Copyright(c) 2016 ingpdw <ingpdw@gmail.com>
 */

'use strict';

exports = module.exports = function( string, node ) {
  function addClass(element, className) {
    element.className += ( element.className === '' )?
    className: ' ' + className;
  };

  let _selector = string.split( ' ' );
  let _node = document.createElement( node || 'div' );
  let _class = [], _id = '';

  for( let item of _selector ){
    if( item.charAt( 0 ) == '#' )
      _id = item.substr( 1 );

    if( item.charAt( 0 ) == '.' )
      _class.push( item.substr( 1 ) );
  }

  for( let item of _class ){
    addClass( _node, item );
  }

  if( _id ) _node.id = _id;

  return _node.outerHTML;
}
