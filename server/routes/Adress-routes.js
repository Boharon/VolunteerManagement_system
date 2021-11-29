var express = require('express');
var AddressController=require('../controllers/Address-controller');
var router = express.Router();

router.post('/getStreetsByCity',AddressController.GetAllStreetsByCity);
router.post('/fetchAllAddress',AddressController.fetchAllAddress);

module.exports = router;
