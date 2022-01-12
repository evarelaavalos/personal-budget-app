const getConnection = require('../database/mysql');

async function getBalance() {
    return new Promise(async (resolve, reject) => {
        let connection = await getConnection();
        connection.query("SELECT SUM(amount) as 'balance' FROM transactions;",
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