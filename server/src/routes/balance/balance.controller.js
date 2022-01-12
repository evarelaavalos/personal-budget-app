const { getBalance } = require('../../models/balance.model');

async function httpGetBalance(req, res) {
    const balance = await getBalance();
    return res.status(200).json(balance);
}

module.exports = {
    httpGetBalance,
}
