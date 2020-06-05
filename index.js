const express = require("express");
const app = express();

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
  var nome = "Anderson Amorim";
  var lang = "JS"
  var produtos = [
    {nome:"Doritos",preco:4},
    {nome:"Coca",preco:2},
    {nome:"Leite",preco:2},
  ]
  res.render('content/index',{
    nome,
    lang,
    empresa:"Voitto",
    mostrar:true,
    produtos
  })
})


app.listen(8080,()=>{
  console.log("App rodando")
})