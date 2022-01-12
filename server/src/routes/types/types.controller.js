const { getAllTypes } = require('../../models/types.model.js');

async function httpGetAllTypes(req, res) {
    try {
        const types = await getAllTypes();
        return res.status(200).json(types);
    } catch (err) {
        res.status(500).json({
            error: 'Internal server error',
        });
    }
}

module.exports = {
    httpGetAllTypes
}
