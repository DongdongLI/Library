var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
        {
            title:'Duma Island',
            genre: 'Novel',
            author:'Steven King',
            read: false
        },
        {
            title:'World Cup',
            genre: 'Fiction',
            author:'Ruben',
            read: false
        }
    ];

var router = function(nav){

    adminRouter.route('/addBooks')
        .get(function(req, res){
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function(err, db){
                if(err){
                    console.log('err: '+err);
                }
                else{
                    var collection = db.collection('books');
                    collection.insertMany(books, function(err, results){
                        res.send(results);
                        db.close();
                    });
                }
            })
        });

    return adminRouter;
}

module.exports = router;