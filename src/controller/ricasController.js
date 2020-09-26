const ricas = require ("../model/mulheres-ricas.json");

const getAll = (req, res) => {
    console.log(req.url);
    res.send(ricas);
};

module.exports = {getAll};
