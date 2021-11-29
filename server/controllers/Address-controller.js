var crudModel = require('../models/Address-model');
module.exports = {
    GetAllStreetsByCity: function (req, res) {
        console.log(req.body);
        const fetchData = crudModel.GetAllStreetsByCity(req.body.city).then(address=>{res.send(address)}).catch(err=>{res.status(500).send({message:err.message||"Error ho"})});
    },
    fetchAllAddress: function (req, res) {
        const fetchData = crudModel.fetchAllAddress().then(address=>{res.send(address)}).catch(err=>{res.status(500).send({message:err.message||"Error ho"})});
       // res.send(fetchData);
    }
}