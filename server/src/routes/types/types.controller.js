const { getAllTypes } = require('../../models/types.model.js');

async function httpGetAllTypes(req, res) {
    const types = await getAllTypes();
    return res.status(200).json(types);
}

module.exports = {
    httpGetAllTypes
}
