const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send ({
       titulo: "Mulheres historicas" 
    })
});

module.exports = router;
