const express = require('express');
const format = require('date-format');
const app = express();

const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
	console.log(`server is running at ${PORT}`);
});

app.get('/', (req, res) => {
	res.status(200).send('Heloo Raghav');
});

app.get('/api/v1/:id', (req, res) => {
	console.log(req.params.id);
	res.status(200).json({ param: req.params.id });
});

app.get('/api/v1/instagram', (req, res) => {
	const instaSocial = {
		userName: 'Raghav',
		followers: '66',
		follows: '23',
		date: format.asString('dd[MM]-hh:mm:ss', new Date()),
	};
	res.status(200).json(instaSocial);
});

app.get('/api/v1/facebook', (req, res) => {
	const instaSocial = {
		userName: 'Raghav',
		followers: '660',
		follows: '2',
		date: Date.now(),
	};
	res.status(200).json(instaSocial);
});
app.get('/api/v1/linkedin', (req, res) => {
	const instaSocial = {
		userName: 'Raghav kumar',
		followers: '65',
		follows: '240',
		date: Date.now(),
	};
	res.status(200).json(instaSocial);
});
