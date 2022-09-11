const express = require('express');
let axios = require('axios');
var app = express();
app.use(express.json());
app.post('/', function(req, res, next) {
	try {
		let results = req.body.developers.map(async (d) => {
			return await axios.get(`https://api.github.com/users/${d}`);
		});
		let out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));

		return res.redirect(JSON.stringify(out));
	} catch (e) {
		next(e);
	}
});

app.listen(3000, () => {
	console.log('App running no port 3000');
});
