const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
res.send({
    titulo: "mulheres riquissimas "
})
});

module.exports = router;

