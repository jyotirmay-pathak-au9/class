const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const port = 8000;

const app = express();


app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(expressLayouts);
app.use(cookieParser());
app.set('layout extractStyles', true);
app.use('/', require('./router'));


app.listen(port, (err)=> {
    if(err){
        console.log(`Error in creating server ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})
