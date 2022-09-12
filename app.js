const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const empRoutes = require('./routes/employees');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use('/', empRoutes)

app.get('*', (req, res)=>{
    res.statusCode = 404;
    res.end();
})
app.listen(80);