const getConnection = require('../database/mysql');

async function getAllTransactions() {
    return new Promise(async (resolve, reject) => {
        let connection = await getConnection();
        connection.query('SELECT * FROM transactions', (err, rows) => {
            !err ? resolve(rows) : reject(err)
        });

        connection.release();
    });
}

async function addNewTransaction(transaction) {
    return new Promise(async (resolve, reject) => {
        let connection = await getConnection();
        connection.query(
            'INSERT INTO transactions (concept, date, amount, type) '
            + 'VALUES (?, ?, ?, ?)',
            [
                transaction.concept,
                transaction.date,
                transaction.amount,
                transaction.type
            ],
            (err, result) => {
                !err ? resolve(result) : reject(err);
            });

        connection.release();
    });
}

async function editTransaction(id, transaction) {
    return new Promise(async (resolve, reject) => {
        let connection = await getConnection();
        connection.query(
            'UPDATE transactions SET '
            + 'concept = ?, date = ?, amount = ? '
            + 'WHERE id = ?;',
            [
                transaction.concept,
                transaction.date,
                transaction.amount,
                id
            ],
            (err, result) => {
                !err ? resolve(result) : reject(err);
            });
    
        connection.release();
    });
}

async function deleteTransaction(id) {
    return new Promise(async (resolve, reject) => {
        let connection = await getConnection();
        connection.query(
            'DELETE FROM transactions WHERE id = ?', [id], (err, result) => {
                !err ? resolve(result.affectedRows) : reject(err);
            });
    
        connection.release();
    });
}

async function existsTransactionWithId(id) {
    return new Promise(async (resolve, reject) => {
        let connection = await getConnection();
        connection.query('SELECT 1 FROM transactions WHERE id = ?', [id],
        (err, result) => {
            !err ? resolve(...result) : reject(err)
        });

        connection.release();
    });
}

module.exports = {
    getAllTransactions,
    addNewTransaction,
    editTransaction,
    deleteTransaction,
    existsTransactionWithId,
};
