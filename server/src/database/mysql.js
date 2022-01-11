const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'COMPLETE_WITH_YOUR_PASSWORD',
    port: 'ADD_YOUR_PORT_NUMBER',
    database: 'personal_budget_db',
});

async function getConnection() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            !err ? resolve(connection) : reject(err);
        });
    })
}

module.exports = getConnection;
