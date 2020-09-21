const path = require('path');
const fs = require('fs');

const express =require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')

const sequelize = require('./util/database');

const staticPages = require('./routes/static')
const mongoConnect = require('./util/database')


// const displayS1Data = require('./routes/displayS1');
// const loginData = require('./routes/login');
// const adminctrl = require('./routes/admin');
//const mongoConnect = require('./util/database').mongoConnect; 
//const products = require('./model/products');
//const authRoute = require('./routes/auth.js');

const app = express();

app.set('views engine','pug');
app.set('views','views');

const accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags : 'a'})

app.use(helmet())
app.use(compression())
app.use(morgan('combined',{stream : accessLogStream}))

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//app.get('/index',displayS1Data);

// app.use(displayS1Data);
// app.use(loginData);
// app.use(adminctrl);
app.use(staticPages)

app.listen(process.env.PORT || 3000,err=>{
    if (err) {
        console.error(err);
   a }
    console.log('server started at port 3000');
});

mongoConnect(client=>{
    console.log(client);
       
})



