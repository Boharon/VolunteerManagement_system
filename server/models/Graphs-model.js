const mongoose = require('mongoose')

const deliverySchema =mongoose.Schema({
    _code: mongoose.Schema.Types.ObjectId,
    date:  Number,
    myDeliveryMan: String,
    myAdult: String,
    areaGroup:Number,
    isDone:Boolean,

});
const Delivery = mongoose.model('Delivery', deliverySchema)
module.exports = {
    createDelivery: function (newDelivery) {
        const practical = new Delivery(newDelivery);
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
    fetchCrud: function (findCode) {
        Delivery.find({ _code: findCode }, function (err, docs) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("First function call : ", docs);
                return docs;
            }
        });
    },
    fetchAllCrud: function ()  {
        return Delivery.find({});
    },
    getByDateDone: function (date)  {
        return Delivery.find({date:date,isDone:true}, function (err, docs) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("First function call : ", docs);
                return docs;
            }
        });
    },

    editCrud: function (editData) {
        Delivery.updateOne({ _id: editData.id }, 
            {isDone:editData.isDone}, function (
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
    }/*,
    deleteCrud: function (deleteId) {
        console.log(deleteId);
        Delivery.updateOne({ id: deleteId }, { isActive: false }, function (
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
    }*/
}