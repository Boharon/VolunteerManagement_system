var express = require('express');
var DeliveryController=require('../controllers/Delivery-controller');
var router = express.Router();

router.post('/fetchAllDeliveryByDate',DeliveryController.fetchAllDeliveryByDate);
router.post('/fetchAllCrud',DeliveryController.fetchAllCrud);
router.post('/onIsDoneChange',DeliveryController.onIsDoneChange);

module.exports = router;