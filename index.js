const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');

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
        Resposta.findAll({where:{
          id_pergunta:id
        }}).then((respostas)=>{
          res.render('pergunta',{pergunta,respostas})
        })
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

app.post('/salvar_resposta',(req,res)=>{
  var id_pergunta = req.body.id_pergunta;
  var corpo = req.body.corpo;
  Resposta.create({
    corpo,
    id_pergunta
  })
  .then(()=>{
    res.redirect('/pergunta/'+id_pergunta)
  })
  .catch(()=>{
    alert('Erro ao salvar resposta')
  })
})


app.listen(8080,()=>{
  console.log("App rodando")
})