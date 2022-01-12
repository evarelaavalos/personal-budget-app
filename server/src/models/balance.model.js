const getConnection = require('../database/mysql');

async function getBalance() {
    return new Promise(async (resolve, reject) => {
        let connection = await getConnection();

        // Add the incomes to the balance and subtract the expenses
        connection.query("SELECT SUM(CASE WHEN type = 1 THEN ABS(amount) "
            + "ELSE ABS(amount) * -1 END) as 'balance' FROM transactions;",
            (err, result) => {
                !err ? resolve(...result) : reject(err)
            }
        );
        connection.release();
    });
}

module.exports = {
    getBalance,
}