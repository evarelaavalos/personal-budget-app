const moment = require('moment');

const {
    getAllTransactions,
    addNewTransaction,
    editTransaction,
    deleteTransaction,
    existsTransactionWithId,
} = require('../../models/transactions.model');

async function httpGetAllTransactions(req, res) {
    const transactions = await getAllTransactions();
    return res.status(200).json(transactions);
}

async function httpAddNewTransaction(req, res) {
    const transaction = req.body;

    if (!transaction.concept || !transaction.date || !transaction.amount
        || !transaction.type) {
            return res.status(400).json({
                error: 'Missing required transaction property',
            })
        }

    if (isNaN(moment(transaction.date))) {
        return res.status(400).json({
            error: 'Invalid transaction date',
        })
    }

    transaction.date = moment(transaction.date).format('YYYY-MM-DD');

    await addNewTransaction(transaction);
    return res.status(201).json(transaction);
}

async function httpEditTransaction(req, res) {
    const transaction = req.body;
    const idTransaction = Number(req.params.id);

    if (idTransaction < 0) {
        return res.status(400).json({
            error: 'Invalid transaction id',
        })
    }

    if (!transaction.concept || !transaction.date || !transaction.amount) {
        return res.status(400).json({
            error: 'Missing required transaction property',
        })
    }

    if (isNaN(moment(transaction.date))) {
        return res.status(400).json({
            error: 'Invalid transaction date',
        })
    }

    const existsTransaction = await existsTransactionWithId(idTransaction);
    if (!existsTransaction) {
        return res.status(404).json({
            error: 'Transaction not found',
        })
    }

    transaction.date = moment(transaction.date).format('YYYY-MM-DD');

    await editTransaction(idTransaction, transaction);
    return res.status(200).json(transaction);
}

async function httpDeleteTransaction(req, res) {
    const idTransaction = Number(req.params.id);

    if (idTransaction < 0) {
        return res.status(400).json({
            error: 'Invalid transaction id',
        })
    }

    const existsTransaction = await existsTransactionWithId(idTransaction);
    if (!existsTransaction) {
        return res.status(404).json({
            error: 'Transaction not found',
        })
    }

    const deleted = await deleteTransaction(idTransaction);
    if (!deleted) {
        return res.status(400).json({
            error: 'Transaction not deleted',
        })
    }

    return res.status(200).json({
        ok: true,
    });
}

module.exports = {
    httpGetAllTransactions,
    httpAddNewTransaction,
    httpEditTransaction,
    httpDeleteTransaction,
}
