function Entries(){
}

Entries.prototype.get = function() {
	return {"entries":[{"title": "First entry", "body": "First entry body"}, {"title": "Second entry", "body": "Second entry body"}]}
}

module.exports = Entries
