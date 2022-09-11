let axios = require('axios');

users = [ 'joelburton', 'elie' ];

let results = users.map(async (d) => {
	let data = await axios.get(`https://api.github.com/users/${d}`);
	console.lo;
});
// let out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));

console.log(results);

results.forEach((element) => {
	element.then((data) => {
		console.log(data);
	});
});
