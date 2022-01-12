const express = require('express');

const {
    httpGetAllTypes
} = require('./types.controller.js');

const typesRouter = express.Router();

typesRouter.get('/', httpGetAllTypes);

module.exports = typesRouter;
