const express = require('express')
const app = express();

app.use('/',(req, res) =>{
  res.send('Hello pracice node server')
})
app.listen('5000', ()=>{
  console.log('sever on 5000')
})