var chai = require('chai');
var expect = chai.expect;
var Entries = require('../app/entries')

describe('Frame', function() {
	it('Should return me some entries', function(){
		var entries = new Entries()
		expect(entries.get()).to.not.be.undefined
	})
})
