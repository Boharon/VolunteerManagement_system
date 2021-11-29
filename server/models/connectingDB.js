
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/DeliverySystemDB', { useMongoClient: true, useNewUrlParser: true,useUnifiedTopology:true })
    .then(() => {
        console.log('Mongodb connected....');
    });