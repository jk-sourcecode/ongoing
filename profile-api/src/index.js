const express = require('express');
const app = express();
const router = express.Router();
require('dotenv').config();
const cors = require('cors');

const allowOrigin = process.env.ALLOW_ORIGIN;

const corsOptions = {
    origin: allowOrigin,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const bodyParser = require('body-parser')

require('./routes')(app, router);

PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
