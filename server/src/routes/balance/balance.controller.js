const { getBalance } = require('../../models/balance.model');

async function httpGetBalance(req, res) {
    try {
        const balance = await getBalance();
        return res.status(200).json(balance);
    } catch (err) {
        res.status(500).json({
            error: 'Internal server error',
        });
    }
}

module.exports = {
    httpGetBalance,
}
