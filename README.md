# dom-by-selector

this is little function to convert selector String to the DOM

## Install

```
$npm install dom-by-selector
```

## Usage

```
var domBySelector = require( 'dom-by-selector' );

domBySelector( '#myId' );
//<div id="myId"></div>

domBySelector( '.myClass' );
//<div class="myClass"></div>

domBySelector( '.myClass1 .myClass2' );
//<div class="myClass1 myClass2"></div>

domBySelector( '.myClass1 .myClass2 #myId' );
//<div id="myId" class="myClass1 myClass2"></div>

domBySelector( '.myClass1', 'p' );
//<p class="myClass1"></p>
```

## API

```
var domBySelector = require( 'dom-by-selector' );
```

## build
* npm install babel -g
* npm run compile

## License
© 2016 ingpdw. MIT License
