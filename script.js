//Algoritmo 

//Calcular IMC
//1.Pegar os valores
//2.Calcular o IMC
//3.Gerar a classificaçao do IMC
//4.Organizar as informaçoes
//5.Salvar os dados na lista
//6.Ler a lista com os dados
//7.Renderizar o conteúdo no HTML
//8.Botao de limpar os registros


function calcularImc(event) {
    console.log(event);
    event.preventDefault();


    console.log("Funcionante!!!!");
    let dadosUsuarios = pegarValores();
    let imc = calcular(dadosUsuarios.altura, dadosUsuarios.peso);
    let classificacaoImc = classificarImc(imc)

    let usuarioAtualizado = organizarDados(dadosUsuarios, imc, classificacaoImc)

    cadastrarUsuario(usuarioAtualizado);
}

//Passo 1.Pegar os valores
function pegarValores() {
    let nomeRecebido = document.getElementById("nome").value.trim();
    let alturaRecebido = parseFloat(document.getElementById("altura").value);
    let pesoRecebido = parseFloat(document.getElementById("peso").value);

    let dadosUsuario = {
        nome: nomeRecebido,
        altura: alturaRecebido,
        peso: pesoRecebido
    }
    console.log(dadosUsuario);
    return dadosUsuario;
}


//Passo 2.Calcular
function calcular(altura, peso) {
    let imc = (peso / (altura * altura)).toFixed(2);
    console.log(imc);

    return imc;
}

//Passo 3.Classificar
function classificarImc(imc) {
    /*
    Resultado               Situacao
    Abaixo de 18,5          Filezinho!!!  
    Entre 18,5 e 24,99      Dilica!!!
    Entre 25 e 29,99        Ta Top!!!
    Acima de 30             Oh la em casa!!!
    */

    if (imc < 18, 5) {
        return "Filezinho!!!";
    } else if (imc < 25) {
        return "Diliça!!!"
    } else if (imc < 30) {
        return "Ta Top!!!"
    } else {
        return "Oh la em casa!!!"
    }

}


//Passo 4. Organizar Informacoes

function organizarDados(dadosUsuario, valorImc, classificacaoImc) {
    let dataHoraAtual = Intl.DateTimeFormat('pt-BR', { timeStyle: 'long', dateStyle: 'short' }).format(Date.now());


    let dadosUsuarioAtualizado = {
        ...dadosUsuario,
        imc: valorImc,
        clasificacao: classificacaoImc,
        dataCadastro: dataHoraAtual
    } 
    console.log(dadosUsuarioAtualizado);
    
    return dadosUsuarioAtualizado

}


//Passo 5 .Salvar
function cadastrarUsuario(usuario) {
    let listaUsuario = [];

    if (localStorage.getItem("usuariosCadastrados"))  {
    listaUsuario =  JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    listaUsuario.push(usuario)
    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuario))

}

// alert(organizarDados)

//calcularImc();