const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
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
  Pergunta.findAll({raw:true,order:[['id','DESC']]})
    .then((perguntas)=>{
      res.render('home',{
        perguntas
      })
    })
 
})
app.get('/perguntar',(req,res)=>{
  res.render('perguntar')
})

app.get('/pergunta/:id',(req,res)=>{
  const id = req.params.id;
  Pergunta.findOne({raw:true,where:{id}})
    .then((pergunta)=>{
      if(!pergunta){
        res.redirect('/')
      }else{
        res.render('pergunta',{pergunta})
      }
    })
})

app.post('/salvarpergunta',(req,res)=>{
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  Pergunta.create({
    titulo,
    descricao
  }).then(()=>{
    res.redirect('/');
  }).catch(()=>{
    alert("Houve um erro ao salvar")
  })
})


app.listen(8080,()=>{
  console.log("App rodando")
})