const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333


function mostraMulher(request, response) {
response.json({
    nome: 'Tayane Abreu',
    imagem: 'https://pbs.twimg.com/profile_images/1609742365064839172/16V1PY3o_400x400.jpg',
    minibio: 'Desenvolvedora em nuvem' 
})
}

function mostraPorta(){
console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)