var crudModel = require('../models/Blog-model');
module.exports = {
    createCrud: function (req, res) {
        console.log("im king");
       // console.log(req.body);
        const newBlog = { title: req.body.title,articel: req.body.text, date:Date.parse(req.body.date),author: req.body.author};
        console.log(newBlog);
        const createData = crudModel.createBlog(newBlog);
        res.writeHead(200, "ok", { 'Content-Type': 'text/plain', 'Set-Cookie': 'firstName=ABC' });
        res.end();
        console.log('Saved!');
        res.send();
    },
    fetchAllBlogs: function (req, res) {
        const fetchData = crudModel.fetchAllCrud().then(blogs=>{res.send(blogs)}).catch(err=>{res.status(500).send({message:err.message||"Error ho"})});

        // res.send(fetchData);
    }
}