//var crudModel=require('../models/crud-model');
var crudModel = require('../models/DeliveryMan-model');
module.exports = {
    crudForm: function (req, res) {
        res.render('crud-operation');
    },
    createCrud: function (req, res) {
        console.log("im king");
        const newDeliveryMan = { id: req.body.id, firstName: req.body.firstName, lastName: req.body.lasttName,phoneNumber: req.body.phoneNumber, email:req.body.email,password:req.body.password,isActive:req.body.isActive};
        console.log(newDeliveryMan);
        const createData = crudModel.createDeliveryMan(newDeliveryMan);
        res.writeHead(200, "ok", { 'Content-Type': 'text/plain', 'Set-Cookie': 'firstName=ABC' });
        res.end();
        console.log('Saved!');
        res.send();
    },
    fetchCrud: function (req, res) {
        const fetchData = crudModel.fetchCrud(req.body.id);
        res.send(fetchData);
    },
    fetchAllCrud: function (req, res){
        crudModel.fetchAllDeliveryMan().then(deliveryMans=>{res.send(deliveryMans); console.log(deliveryMans);}).catch(err=>{res.status(500).send({message:err.message||"Error ho"})})
    },
    editCrud: function (req, res) {
        const editUsers = { id: req.body.id, name: req.body.name, password: req.body.password, phone: req.body.phone, catagory: req.body.catagory, branch_code: req.body.branch_code, isActive: req.body.isActive };
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