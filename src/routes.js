const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController')
const MarketController = require('./controllers/MarketController')
const CounterController = require('./controllers/CounterController')


routes.post("/users", UserController.createUser );
routes.post("/markets", MarketController.createMarket)
routes.post("/counters", CounterController.createCounter)

module.exports = routes;