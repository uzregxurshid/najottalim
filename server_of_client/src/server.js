const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const PublicRoutes = require('./routes/PublicRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/api',PublicRoutes);
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port));