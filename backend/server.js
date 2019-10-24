const express=require('express')
const app=express()

//use cors
var cors = require('cors');
app.use(cors({
  Origin:'http://localhost:4200/'
}));

//routing request to matchcustomers.js
app.use('/get',require('./matchcustomers'));

//creating server
app.listen(3000, () => {
    console.log('server started');
  });