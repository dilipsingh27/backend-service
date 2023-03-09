const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

const { contentRoute } = require('./routes/contentRoute');

app.use('/api', contentRoute);

app.listen(5000, () => console.log('Server started'));

