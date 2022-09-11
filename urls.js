const axios = require('axios');
const fs = require('fs');

async function getUsers() {
	const elie = await $.getJSON('https://api.github.com/users/elie');
	const joel = await $.getJSON('https://api.github.com/users/joelburton');
	const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

	return [ elie, matt, joel ];
}

// console.log(process.argv[2]);

function writeToFile(file, content) {
	fs.writeFile(file, content, 'utf8', (err) => {
		if (err) {
			console.log(err);
			process.kill(1);
		}
		console.log('Content has been loaded to ' + file);
	});
}

async function readFile(file) {
	fs.readFile(file, 'utf8', async (err, data) => {
		if (err) {
			console.log(err);
			process.kill(0);
		}
		urls = data.split('\n');
		urls.pop();

		urls.forEach(async function(url) {
			console.log('---->' + url);
			let web = await axios.get(url);
			com = url.split('//')[1];
			fname = com.split('.')[0];
			console.log(fname);

			writeToFile(`webPages/${fname}.html`, web.data);
		});
	});
}

readFile(process.argv[2]);
