const express = require('express');
const app = express();

app.use(express.json());

const { contentRoute } = require('./routes/contentRoute');

app.use('/api', contentRoute);

app.listen(5000, () => console.log('Server started'));

