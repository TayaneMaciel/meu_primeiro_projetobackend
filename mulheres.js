const express = require("express"); //aqui estou iniciando o express
const router = express.Router(); // aqui estou configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid');

const app = express(); // aqui estou iniciando o app
app.use(express.json())
const porta = 3333; // aqui estou criando a porta

//aqui estou criando lista inicial de mulheres
const mulheres= [
    {
        id: '1',
        nome: 'Tayane Maciel',
        imagem: 'https://pbs.twimg.com/profile_images/1609742365064839172/16V1PY3o_400x400.jpg',
        minibio: 'desenvolvedora em nuvem'
    },
    {
        id:'2',
        nome: 'Rosana Maciel',
        imagem: 'https://pbs.twimg.com/profile_images/1609742365064839172/16V1PY3o_400x400.jpg',
        minibio: 'desenvolvedora front end'   
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response){
    const novaMulher= {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)
    response.json(mulheres)
}

//PATCH
function corrigeMulher(request,response){
    function encontraMulher(mulher){
        if (mulher.id===request.params.id){
            return mulher
        }
    }
    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.name){
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio){
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem){
        mulherEncontrada = request.body.imagem
    }

    response.json(mulheres)
}



app.use(router.get("/mulheres", mostraMulheres)); // configuração rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)); // cinfigurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) // configurei a rota patch /mulheres/:id

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta);
  }

app.listen(porta, mostraPorta); //servidor ouvindo a porta