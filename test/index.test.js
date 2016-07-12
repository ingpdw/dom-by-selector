var convertSelector = require( '..' ),
    assert = require( 'assert' );

describe('convert-selector()', function() {
  it('should be #name', function() {
    assert.equal( convertSelector( 'name', 'id' ), '#name' );
  });

  it('should be .name', function() {
    assert.equal( convertSelector( 'name', 'class' ), '.name' );
  });

  it('should be .name1.name2', function() {
    assert.equal( convertSelector( 'name1 name2', 'class' ), '.name1.name2' );
  });

  it('should be .name1.name2', function() {
    assert.equal( convertSelector( 'name1 name2' ), '.name1.name2' );
  });

  it('should be ""', function() {
    assert.equal( convertSelector( '' ), '' );
  });
});
