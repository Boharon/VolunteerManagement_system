var express = require('express');
var AdultController=require('../controllers/Adult-controller');
var router = express.Router();


router.post('/post',  function(req, res, next) {
  let found = false;
  let isWorker = false;
  let isManager = false;
  let user = req.body.user;
  let password = req.body.password;
  console.log("hii");
  res.writeHead(200, "ok", { 'Content-Type': 'text/plain', 'Worker': 'true', 'Manager': 'true', 'userID':  '11111'});
  res.end();    
});
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/fetchAllAdults',AdultController.fetchAllCrud);
router.post('/fetchAllAdultsByCity',AdultController.fetchAllAdultsByCity);
router.post('/addadult',AdultController.createCrud);
//router.post('/deluser',AdultController.deleteCrud);
//router.post('/updateuser', AdultController.editCrud);

module.exports = router;
