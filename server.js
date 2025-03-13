const mongoose = require ('mongoose');
const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const app = express ();
const port = 3000;
const eventRoutes = require ('./routes/events');
const authRoutes = require ('./routes/auth');
require ('dotenv').config ();

app.use (bodyParser.json ());
app.use (cors ());
app.use ('/events', eventRoutes);
app.use ('/auth', authRoutes);

mongoose.connect ('mongodb://localhost:27017/eventplanner', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection
    = mongoose.connection;

connection.once ('open', () => {
    console.log ('MongoDB database connection established successfully');
    }
);

app.listen (port, () => {
    console.log ('Server is running on port: ' + port);
    }
);