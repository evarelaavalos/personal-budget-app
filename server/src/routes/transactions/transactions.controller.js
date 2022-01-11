const {
    getAllTransactions,
    addNewTransaction,
    editTransaction,
    deleteTransaction,
} = require('../../models/transactions.model');

function httpGetAllTransactions(req, res) {
    // TODO: Once the database it's created.
    // Retrieve the data and reply with the corresponding Status Code.
}

function httpAddNewTransaction(req, res) {
    // TODO: Once the database it's created.
    // Take the incoming request and validate it.
    // Add the new data and reply with the corresponding Status Code.
}

function httpEditTransaction(req, res) {
    // TODO: Once the database it's created.
    // Take the incoming request and validate it.
    // Modify the existing data and deny it if not exists.
}

function httpDeleteTransaction(req, res) {
    // TODO: Once the database it's created.
    // Check if the transaction with the given id exists.
    // Delete it and reply with the corresponding Status Code.
}

module.exports = {
    httpGetAllTransactions,
    httpAddNewTransaction,
    httpEditTransaction,
    httpDeleteTransaction,
}
