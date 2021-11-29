const mongoose = require('mongoose')

const deliveryManSchema =mongoose.Schema({
    id:{type: String,require:true,unique:true},
    firstName: {type: String,require:true},
    lastName: {type: String,require:true},
    phoneNumber: {type: String,require:true},
    email:{type: String,require:true,unique:true,match:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i},
    password:{type: String,require:true},
    isActive:Boolean

});
const DeliveryMan = mongoose.model('DeliveryMan', deliveryManSchema)
module.exports = {
    createDeliveryMan: function (newDeliveryMan) {
        const practical = new DeliveryMan(newDeliveryMan);
        practical.save((err, results) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log('saved:', results);
            }
        });
        data = "Form data was inserted";
        return data;
    },
    fetchCrud: function (findId) {
        DeliveryMan.find({ id: findId }, function (err, docs) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("First function call : ", docs);
                return docs;
            }
        });
    },
    fetchAllDeliveryMan: function ()  {
        return DeliveryMan.find({});
    },

    editCrud: function (editData) {
        DeliveryMan.updateOne({ id: editData.id }, 
            { firstName: editData.firstName,
                 lastName: editData.lastName,
                  phoneNumber: editData.phoneNumber,
                  email:editData.email,
                  isActive:editData.isActive
                   }, function (
            err,
            results
        ) {
            if (err) {
                console.error(err);
            }
            else {
                console.log('saved:', results);
            }
        });
        data = "Data is edited by id: " + editData;
        return data;
    },
    deleteCrud: function (deleteId) {
        console.log(deleteId);
        DeliveryMan.updateOne({ id: deleteId }, { isActive: false }, function (
            err,
            results
        ) {
            if (err) {
                console.error(err);
            }
            else {
                console.log('deleted:', results);
            }
        });
        data = "Data is deleted by id: " + deleteId;
        return data;
    }
}