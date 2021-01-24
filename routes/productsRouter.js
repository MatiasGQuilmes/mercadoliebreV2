var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');

/* GET users listing. */
router.get('/detail/:id/:category', productsController.detail);

module.exports = router;
