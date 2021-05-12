const express = require("express");
const cors = require("cors");

const app = express();

// ==> Rotas da API
const index = require('./routes/index');
const galaxyRoute = require('./routes/galaxy.routes');
const systemRoute = require('./routes/system.routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(index);
app.use('/api/', galaxyRoute);
app.use('/api/', systemRoute);

module.exports = app;
