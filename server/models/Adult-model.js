const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/DeliverySystemDB', { useMongoClient: true, useNewUrlParser: true,useUnifiedTopology:true })
    .then(() => {
        console.log('Mongodb connected....');
    });
    
const adultSchema =mongoose.Schema({
    id: {type: String,require:true,unique:true},
    firstName: {type: String,require:true},
    lastName: {type: String,require:true},
    phoneNumber: {type: String,require:true},
    street:{type: String,require:true},
    buildingNumber:Number,
    city:{type: String,require:true},
    food:Boolean,
    medicine: Boolean,
    isActive: Boolean
    //חסר דליאברי ליסט לא הוספתי
});
const Adult = mongoose.model('Adult', adultSchema)

module.exports = {
    createAdult: function (newAdult) {
        const practical = new Adult(newAdult);
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
    fetchAdult: function (findId) {
        return Adult.find({ id: findId });
    },
    fetchAllAdult: function ()  {
        return Adult.find({});
    },
    fetchAllAdultsByCity: function (city)  {
        return Adult.find({city:city});
    },
    editAdult: function (editData) {
        Adult.updateOne({ id: editData.id }, 
            { firstName: editData.firstName,
                 lastName: editData.lastName,
                  phoneNumber: editData.phoneNumber,
                   address:{street:editData.address.street,
                    buildingNumber:editData.address.buildingNumber,
                    city:editData.address.city},
                    food:editData.food,
                    medicine:editData.medicine,
                    isActive:editData.isActive}, function (
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
    deleteAdult: function (deleteId) {
        console.log(deleteId);
        Adult.updateOne({ id: deleteId }, { isActive: false }, function (
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