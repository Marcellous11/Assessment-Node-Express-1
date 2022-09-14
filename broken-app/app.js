const express = require('express');
let axios = require('axios');
var app = express();
app.use(express.json());
app.post('/', async function(req, res, next) {
	try {
		let prom = req.body.developers.map(async (d) => {
			return await axios.get(`https://api.github.com/users/${d}`);
		});
		const results = await Promise.all(prom);
		let out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));
		console.log(out);
		return res.send(JSON.stringify(out));
	} catch (e) {
		next(e);
	}
});

app.listen(3000, () => {
	console.log('App running no port 3000');
});
