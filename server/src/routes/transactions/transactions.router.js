const express = require('express');

const transactionsRouter = express.Router();

const {
    httpGetAllTransactions,
    httpAddNewTransaction,
    httpEditTransaction,
    httpDeleteTransaction,
} = require('./transactions.controller');

transactionsRouter.get('/', httpGetAllTransactions);
transactionsRouter.post('/', httpAddNewTransaction);
transactionsRouter.put('/:id', httpEditTransaction);
transactionsRouter.delete('/:id', httpDeleteTransaction);

module.exports = transactionsRouter;
