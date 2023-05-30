const express = require("express");

const porta = 3333;
const app = express();

function mostraPorta(){
console.log("Servidor criado e rodando na porta", porta)
}

// OUTRO DE DECLARAR FUNÇÃO
/*
    const mostraPorta = () => {
        console.log("Servidor criado e rodando na porta", porta)
    }
*/

app.listen(porta, mostraPorta)


/*
    é a mesma coisa de cima, normalmente fazem assim:

    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    });

    é a mesma coisa de cima, mas nesse caso a função mostrarPorta() está sendo declarada (como uma função anônima que só vai ser usada uma vez) e exeuctada diretamente dentro do app.listen()
*/