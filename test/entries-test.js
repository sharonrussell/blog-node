var chai = require('chai');
var expect = chai.expect;
var Entries = require('../app/entries')

describe('Frame', function() {
	it('Entries get should return me something', function(){
		var entries = new Entries()
		expect(entries.get()).to.not.be.undefined
	})

	it('Entries get should return me entries', function(){
		var entries = new Entries().get()
		expect(entries["entries"][0]["title"]).to.not.be.undefined
	})
})
