const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/DeliverySystemDB', { useMongoClient: true, useNewUrlParser: true,useUnifiedTopology:true })
    .then(() => {
        console.log('Mongodb connected....');
    });
    
const blogSchema =mongoose.Schema({
    _code: mongoose.Schema.Types.ObjectId,
    title: String,
    author: String,
    articel: String,
    date:Date,

});
const Blog = mongoose.model('Blog', blogSchema)
module.exports = {
    createBlog: function (newBlog) {
        const practical = new Blog(newBlog);
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
    fetchAllCrud: function ()  {
        return Blog.find({}).sort({date: 'desc'});
    },

    editCrud: function (editData) {
        Blog.updateOne({ _code: editData._code }, 
            { title: editData.title,
                author: editData.author,
                articel: editData.articel,
                date:editData.date}, function (
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