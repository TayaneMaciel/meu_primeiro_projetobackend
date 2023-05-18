import express from "express";

const porta = 3333;
const app = express()
function mostraPorta(){
console.log("Servidor criado e rodando na porta", porta)

}

app.listen(porta, mostraPorta)