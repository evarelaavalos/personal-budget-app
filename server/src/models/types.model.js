const getConnection = require('../database/mysql');

async function getAllTypes() {
    return new Promise(async (resolve, reject) => {
        let connection = await getConnection();
        connection.query('SELECT * FROM types;', (err, rows) => {
            !err ? resolve(rows) : reject(err)
        });

        connection.release();
    });
}

module.exports = {
    getAllTypes,
};
