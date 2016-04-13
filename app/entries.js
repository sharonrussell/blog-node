function Entries(){
}

Entries.prototype.get = function() {
	return {"entries":[{"title": "title1"}, {"title": "title2"}]}
}

module.exports = Entries
