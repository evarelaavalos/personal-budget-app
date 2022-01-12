const mysql = require('mysql');
const moment = require('moment');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'COMPLETE_WITH_YOUR_PASSWORD',
    port: 'ADD_YOUR_PORT_NUMBER',
    database: 'personal_budget_db',
    typeCast: function (field, next) {
        if (field.type === 'DATE') {
            return moment(field.string()).format('YYYY-MM-DD');
        } else {
            return next();
        }
    },
});

async function getConnection() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            !err ? resolve(connection) : reject(err);
        });
    })
}

module.exports = getConnection;
