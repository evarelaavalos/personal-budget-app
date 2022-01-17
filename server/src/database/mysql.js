const mysql = require('mysql');
const moment = require('moment');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT || 3306,
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
