# convert-selector

convert string to selector

## Install

```
$npm install convert-selector
```

## Usage

```
var convertSelector = require( 'convert-selector' );

convertSelector( 'name', 'id' );
//#name

convertSelector( 'name', 'class' );
//.name

convertSelector( 'name1 name2', 'class' );
//'.name.name2'

convertSelector( 'name1 name2' );
//'.name.name2'
```

## API

```
var convertSelector = require( 'convert-selector' );

```

## build
* npm install babel -g
* npm run compile

## Test
* npm install mocha -g
* npm test

## License
© 2016 ingpdw. MIT License
