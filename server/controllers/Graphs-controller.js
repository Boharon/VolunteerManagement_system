var crudModel = require('../models/Delivery-model');
var moment = require('moment');
require('moment-timezone');
moment().format(); 

module.exports = {
    getByDateDone: function (req, res)
    {
        var localDateOnly = function(timezone, d) {
            if (d == undefined) { d = new Date(); } // current date/time
            return Number( moment(d).tz(timezone).format("YYYYMMDD") );
        }
        var myDate = localDateOnly("Asia/Jerusalem",req.body.date);  // today, in YYYYMMDD number
        crudModel.getByDateDone(myDate).
        then(deliverys=>{res.send(deliverys);}).catch(err=>{res.status(500).send({message:err.message||"Error ho"})})
    },
    getByDateNotDone: function (req, res)
    {
        var localDateOnly = function(timezone, d) {
            if (d == undefined) { d = new Date(); } // current date/time
            return Number( moment(d).tz(timezone).format("YYYYMMDD") );
        }
        var myDate = localDateOnly("Asia/Jerusalem",req.body.date);  // today, in YYYYMMDD number
        crudModel.getByDateNotDone(myDate).
        then(deliverys=>{res.send(deliverys);}).catch(err=>{res.status(500).send({message:err.message||"Error ho"})})
    },
    getByCityByDayDone: function (req, res)
    {
        var localDateOnly = function(timezone, d) {
            if (d == undefined) { d = new Date(); } // current date/time
            return Number( moment(d).tz(timezone).format("YYYYMMDD") );
        }
        var myDate = localDateOnly("Asia/Jerusalem",req.body.date);  // today, in YYYYMMDD number
        console.log(req.body.city);
        crudModel.getByCityByDayDone(myDate,req.body.city).
        then(deliverys=>{res.send(deliverys);}).catch(err=>{res.status(500).send({message:err.message||"Error ho"})})
   },
    getByCityByDayNotDone: function (req, res)
    {
        var localDateOnly = function(timezone, d) {
            if (d == undefined) { d = new Date(); } // current date/time
            return Number( moment(d).tz(timezone).format("YYYYMMDD") );
        }
        var myDate = localDateOnly("Asia/Jerusalem",req.body.date);  // today, in YYYYMMDD number
        crudModel.getByCityByDayNotDone(myDate,req.body.city).
        then(deliverys=>{res.send(deliverys);}).catch(err=>{res.status(500).send({message:err.message||"Error ho"})})
  
    }

}