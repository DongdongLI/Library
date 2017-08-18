var express = require('express');

var app = express();

var port = process.env.PORT || 7777;

var nav = [
            {Link:'/Books', Text: 'Book'},
            {Link:'/Authors', Text: 'Authors'}
        ];

app.use(express.static('public'));
app.set('views', './src/views');
//app.set('view engine', 'jade');

// var handlebars = require('express-handlebars');
// app.engine('.hbs', handlebars({extname: '.hbs'}));

// app.set('view engine', '.hbs');

app.set('view engine', 'ejs');

var bookRouter = require('./src/routes/bookRoutes')(nav);

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