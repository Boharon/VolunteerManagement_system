const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/DeliverySystemDB', { useMongoClient: true, useNewUrlParser: true,useUnifiedTopology:true })
    .then(() => {
        console.log('Mongodb connected....');
    });
mongoose.Promise=global.Promise;
const addressSchema =mongoose.Schema({
    id: {type: String,require:true,unique:true},
    city_symbol: {type: String,require:true},
    city_name: {type: String,require:true},
    street_symbol: {type: String,require:true},
    street_name:{type: String,require:true}
});
const Address = mongoose.model('Address', addressSchema)

module.exports = {
    GetAllStreetsByCity: function (city) {
        const streets=Address.find({ city_name: city }).distinct('street_name');
        return streets;
    },
    fetchAllAddress: function ()  {
        const allAddress=Address.find({}).distinct('city_name');
        return allAddress;
    }
}