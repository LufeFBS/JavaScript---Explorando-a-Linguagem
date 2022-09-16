console.log('Trabalhando com condicionais');
// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeuro';

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeuro'

);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log('Destinos possíveis:');
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador Maior de idade");
//     staDeDestinos.splice(1,1); // removendo item
// } else if(estaAcompanhada == true) {
//         listaDeDestinos.splice(1,1); //removendo item
//         console.log("Comprador está acompanhado");
        
//     } else {
//         console.log("Não é maior de idade");

    //}

    if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!!");
    listaDeDestinos.splice(2,1); // removendo item      
    } else {
        console.log("Vai ter que vir com um responsável.");

    }

    console.log("Embarque; \n\n");
    if(idadeComprador > 18 && temPassagemComprada) {
        console.log("Boa viagem");
    } else {
        console.log("Você não pode embarcar")
    }
    


console.log('Destinos possíveis:');
console.log(listaDeDestinos);




// listaDeDestinos.push -  adiciona um item na lista
// listaDeDestinos.splice - removendo item


// console.log(salvador, saoPauloa, rioDeJaneiro);


