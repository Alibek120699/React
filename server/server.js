const express = require('express');

const app = express();

app.get('/api/categories', (req, res) => {
	const categories = [
		{id: 1, name: "Running"},
		{id: 2, name: "Walking"},
		{id: 3, name: "Reading"},
		{id: 4, name: "Cleaning"},
		{id: 5, name: "Cooking"},
	];
	res.json(categories);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => `Server is running on port ${PORT}`);