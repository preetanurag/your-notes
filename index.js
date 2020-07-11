const express = require('express');
const path = require('path');
const app = express();
//const mongoose = require("mongoose");
//const router = express.Router;

// mongoose.connect('mongodb+srv://preetanurag5:******@preet-e85kb.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
//     .then(() => 'You are now connected to Mongo!')
//     .catch(err => console.error('Something went wrong', err))
 
  //app.use('/users',require('./routes/users'));
    app.use(express.static(__dirname + '/Public'));

app.get('/',  (req, res) => {
  res.render('index.ejs')
});
app.get('/index1.ejs',  (req, res) => {
  res.render('index1.ejs')
});
app.get('/login.ejs',  (req, res) => {
  res.render('login.ejs')
});
app.get('/signup.ejs',  (req, res) => {
  res.render('signup.ejs')
});

app.listen(3000,()=>{
    console.log('listning to the port 3000');
});
