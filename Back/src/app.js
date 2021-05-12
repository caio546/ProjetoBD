const express = require("express");
const cors = require("cors");

const app = express();

// ==> Rotas da API
const index = require('./routes/index');
const galaxyRoute = require('./routes/galaxy.routes');
const systemRoute = require('./routes/system.routes');
const planetRoute = require('./routes/planet.routes');
const starRoute = require('./routes/star.routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(index);
app.use('/api/', galaxyRoute);
app.use('/api/', systemRoute);
app.use('/api/', planetRoute);
app.use('/api/', starRoute);
module.exports = app;
