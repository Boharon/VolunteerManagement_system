var crudModel = require('../models/Delivery-model');
var AdultModel = require('../models/Adult-model');
var moment = require('moment');
require('moment-timezone');
moment().format(); 

module.exports = {
    crudForm: function (req, res) {
        res.render('crud-operation');
    },
    createCrud: function (req, res) {
        console.log("im king");
        var localDateOnly = function(timezone, d) {
            if (d == undefined) { d = new Date(); } // current date/time
            return Number( moment(d).tz(timezone).format("YYYYMMDD") );
          }

          var myDate = localDateOnly("Asia/Jerusalem",req.date);  // today, in YYYYMMDD number
          console.log("myDate"+myDate)
          const newDelivery = { date: myDate, myDeliveryMan: req.myDeliveryMan, myAdult: req.myAdult,areaGroup: req.areaGroup, isDone:req.isDone,city:req.city };
        console.log(newDelivery);
        const createData = crudModel.createDelivery(newDelivery);
       // res.writeHead(200, "ok", { 'Content-Type': 'text/plain', 'Set-Cookie': 'firstName=ABC' });
       // res.end();
        console.log('Saved!');
      //  res.send();
    },
    fetchCrud: function (req, res) {
        const fetchData = crudModel.fetchCrud(req.body.id);
        res.send(fetchData);
    },
    fetchAllCrud: function (req, res){
        const fetchData =crudModel.fetchAllCrud().then(deliverys=>{res.send(deliverys);}).catch(err=>{res.status(500).send({message:err.message||"Error ho"})})
    },
    fetchAllDeliveryByDate: function (req, res)
    {
        var localDateOnly = function(timezone, d) {
            if (d == undefined) { d = new Date(); } // current date/time
            return Number( moment(d).tz(timezone).format("YYYYMMDD") );
          }
        var done=function(adults){
            console.log("adultb  "+adults);
            res.send(adults);
        }   
        var itemsProcessed = 0;
        var myDate = localDateOnly("Asia/Jerusalem",req.body.date);  // today, in YYYYMMDD number
        crudModel.fetchAllDeliveryByDate(myDate).
        then(deliverys=>
            {
                console.log("deliverys"+deliverys);
                let adults=[];
                if (deliverys.length==0)
                {
                    done(adults);
                }
                deliverys.forEach(delivery => 
                {
                    console.log("adult"+delivery.myAdult)
                    AdultModel.fetchAdult(delivery.myAdult).
                    then((adult)=>{adults.push({index:delivery._id,adult: adult[0],isDone:delivery.isDone});console.log({itemsProcessed: adult[0]}); itemsProcessed++;
                        if(itemsProcessed === deliverys.length) {
                            done(adults); console.log("adulta  "+adults)}}).catch(err=>console.log(err));
                });
 
            
            }).catch(err=>console.log(err));
        },
        onIsDoneChange: function (req, res) {
        const editUsers = { id: req.body.id,isDone:req.body.isDone};
        const editData = crudModel.editCrud(editUsers);
        res.writeHead(200, "ok", { 'Content-Type': 'text/plain', 'Set-Cookie': 'firstName=ABC' });
        res.end();
        console.log('Saved!');
        //res.render('crud-operation', { editData: editData, editId: req.body.code });
    },
    deleteCrud: function (req, res) {
        const deleteUsers = req.body.id;
        const editData = crudModel.deleteCrud(deleteUsers);
        res.writeHead(200, "ok", { 'Content-Type': 'text/plain', 'Set-Cookie': 'firstName=ABC' });
        res.end();
        
      //  res.render('crud-operation', { editData: editData, editId: req.body.code });
    }
}