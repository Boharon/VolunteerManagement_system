var express = require('express');
var GraphsController=require('../controllers/Graphs-controller');
var router = express.Router();

router.post('/getByDateDone',GraphsController.getByDateDone);
router.post('/getByDateNotDone',GraphsController.getByDateNotDone);
router.post('/getByCityByDayDone',GraphsController.getByCityByDayDone);
router.post('/getByCityByDayNotDone',GraphsController.getByCityByDayNotDone);
/*router.post('/getByDateDoneWeekly',GraphsController.getByDateDoneWeekly);
router.post('/getByDateNotDoneWeekly',GraphsController.getByDateNotDoneWeekly);
router.post('/getByCityByDayDoneWeekly',GraphsController.getByCityByDayDoneWeekly);
router.post('/getByCityByDayNotDoneWeekly',GraphsController.getByCityByDayNotDoneWeekly);
router.post('/getByDateDoneMonth',GraphsController.getByDateDoneMonth);
router.post('/getByDateNotDoneMonth',GraphsController.getByDateNotDoneMonth);
router.post('/getByCityByDayDoneMonth',GraphsController.getByCityByDayDoneMonth);
router.post('/getByCityByDayNotDoneMonth',GraphsController.getByCityByDayNotDoneMonth);*/

module.exports = router;