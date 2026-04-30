const express = require('express');
const cors = require('cors'); 
const session = require('express-session');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();
const distPath = path.join(__dirname, "../client/dist");

// Server setup
app.use(cors());
app.use(express.json()); 
app.use(session({secret:"fingerprint", resave:true, saveUninitialized:true})); 
app.use(express.static(distPath));

// Configure routing
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

module.exports = app;