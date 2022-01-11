const express = require('express');

const balanceRouter = express.Router();

const {
    httpGetBalance,
} = require('./balance.controller');

balanceRouter.get('/', httpGetBalance);

module.exports = balanceRouter;
