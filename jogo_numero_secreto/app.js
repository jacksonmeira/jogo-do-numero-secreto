

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;


function ExibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.3});
}


function exibirMensagem(){

    ExibirTexto("h1", "JOGO DO NÚMERO SECRETO");
    ExibirTexto("p", "Escolha um número de 1 a 10");
}

exibirMensagem();


function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
    ExibirTexto("h1", "ACERTOU !!!");

    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    ExibirTexto("p", `Você encontrou o número secreto em ${tentativas} ${palavraTentativa}`);

    document.getElementById("reiniciar").removeAttribute("disabled");
    

    }else{
        if(chute > numeroSecreto){
            ExibirTexto("p", `O número secreto é menor que ${chute}`);
        }else{
            ExibirTexto("p", `O número secreto é maior que ${chute}`);
        }
    }

    tentativas++;
    limparCampo();
}



function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}



function reiniciarJogo(){

    numeroSecreto = numeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagem();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}
