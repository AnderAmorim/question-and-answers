const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
connection.authenticate()
  .then((error)=>{
    console.log('Connect in DB')
  })
  .catch(()=>{
    console.log('Erro connect in DB: ',error)
  })
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.get('/',(req,res)=>{
//   res.render('content/index')
// })

app.get('/',(req,res)=>{
  res.render('perguntar')
})
app.post('/salvarpergunta',(req,res)=>{
  var {titulo,descricao} = req.body;
  res.send(`${titulo}/${descricao}`)
})


app.listen(8080,()=>{
  console.log("App rodando")
})