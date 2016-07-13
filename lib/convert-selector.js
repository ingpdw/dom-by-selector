/*
 * convert-selector- lib/convert-selector
 * Copyright(c) 2016 ingpdw <ingpdw@gmail.com>
 */

'use strict';

exports = module.exports = function (str, type) {
  var _str = '',
      _selector = '.',
      _tmp = [],
      _type = ['id', 'class'];
  if (!str) return '';

  var child = '>';

  var isObject = function isObject(obj) {
    return typeof obj == 'object' ? true : false;
  };

  if (str instanceof Array) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (isObject(item)) {
          _selector = item.type == _type[0] ? '#' : '.';
          _tmp.push(_selector + item.name);
        } else {
          _tmp.push(item == child ? ' ' : '.' + item);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else if (str instanceof Object) {
    _selector = str.type == _type[0] ? '#' : '.';
    _tmp.push(_selector + str.name);
  } else {
    _str = str.split(' ');
    _selector = type == _type[0] ? '#' : '.';

    _str.forEach(function (item) {
      _tmp.push(item == child ? ' ' : _selector + item);
    });
  }

  return _tmp.join('');
};