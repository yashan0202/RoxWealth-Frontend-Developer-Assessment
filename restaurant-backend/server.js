const express = require('express');
const app = express();
const port = 3001;

const restaurantsData = require('./data/restaurantData.json');

app.get('/api/restaurants', (req, res) => {
  res.json(restaurantsData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
