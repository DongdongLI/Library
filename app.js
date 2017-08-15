var express = require('express');

var app = express();

var port = process.env.PORT || 7777;

app.use(express.static('public'));
app.set('views', './src/views');
//app.set('view engine', 'jade');

// var handlebars = require('express-handlebars');
// app.engine('.hbs', handlebars({extname: '.hbs'}));

// app.set('view engine', '.hbs');

app.set('view engine', 'ejs');

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
        res.render('books', 
        {title: 'Books', 
        nav: [
            {Link:'/Books', Text: 'Books'},
            {Link:'/Authors', Text: 'Authors'}
        ],
        books: books
        });
    });

bookRouter.route('/single')
    .get(function(req,res){
        res.send('Hello single Books');
    });

app.use('/Books', bookRouter);

app.get('/', function(req, res){
    res.render('index', 
    {title: 'hello from handlebar', 
     nav: [
        {Link:'/Books', Text: 'Books'},
        {Link:'/Authors', Text: 'Authors'}
       ]
    });
});

app.listen(port, function(err){
    console.log('running on...'+port);
});