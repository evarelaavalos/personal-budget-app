const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const balanceRouter = require('./routes/balance/balance.router');
const typesRouter = require('./routes/types/types.router');
const transactionRouter = require('./routes/transactions/transactions.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(morgan('combined'));

app.use('/balance', balanceRouter);
app.use('/transactions', transactionRouter);
app.use('/types', typesRouter);

module.exports = app;
