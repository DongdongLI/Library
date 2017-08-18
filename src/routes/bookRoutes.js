var express = require('express');
var bookRouter = express.Router();

var router = function(nav){
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


    var bookRouter = express.Router();
    bookRouter.route('/')
        .get(function(req,res){
            res.render('bookListView', 
            {title: 'Books', 
            nav: nav,
            books: books
            });
        });

    bookRouter.route('/:id')
        .get(function(req,res){
            var id = req.params.id;
            res.render('bookView', 
            {title: books[id].title, 
            nav: nav,
            book: books[id]
            });
        });

    return bookRouter;
}



module.exports = router;