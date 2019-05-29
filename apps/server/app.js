const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();
const port = 3030;

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
