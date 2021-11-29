var express = require('express');
var BlogController=require('../controllers/Blog-controller');
var router = express.Router();
var DliveryTools=require('../Delivery/AddressToCeordinate')

router.post('/Kmeans',DliveryTools.Kmeans);
router.post('/Kmeans_save',DliveryTools.Kmeans_save);
router.post('/getMapDeliveryMan',DliveryTools.getMapDeliveryMan);

module.exports = router;