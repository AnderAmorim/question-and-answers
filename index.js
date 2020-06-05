const express = require("express");
const app = express();

app.set('view engine','ejs')


app.get('/',(req,res)=>{
  var nome = "Anderson Amorim";
  var lang = "JS"
  res.render('content/index',{
    nome,
    lang,
    empresa:"Voitto"
  })
})


app.listen(8080,()=>{
  console.log("App rodando")
})