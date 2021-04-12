'use strict';

require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const accessLogStream = fs.createWriteStream(path.join(__dirname, './access.log'), { flags: 'a' });

const app = express();
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(express.json());
app.use(cors());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(express.static('public_html'))

const port = process.env.SERVER_PORT || 3020;

app.use('/api/v1/admin/', require('./app/routes/admin-routes.js'));
app.use('/api/v1/users/', require('./app/routes/users-routes.js'));
app.use('/api/v1/services/', require('./app/routes/services-routes.js'));
app.use('/api/v1/solutions/', require('./app/routes/solutions-routes.js'));

app.listen(port, () => console.log(`Listening ${port}...`));
