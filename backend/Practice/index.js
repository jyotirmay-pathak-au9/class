const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const port = 8000;

const app = express();


app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.use('/', require('./router'));

app.listen(port, (err)=> {
    if(err){
        console.log(`Error in creating server ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})
