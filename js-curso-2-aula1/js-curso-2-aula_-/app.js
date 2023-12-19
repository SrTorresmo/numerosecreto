let listadenumerossorteados= [];
let numerolimite = 10;
let nuemerosecreto = gerarnumeroaleatorio();
let tentativas = 1 ;


function exibirtextonatela(tag, texto){

  let campo = document.querySelector(tag)
  campo.innerHTML = texto;
  responsiveVoice.speak(texto)
} 
function mensageminicial(){
exibirtextonatela(`h1`,`jogo do numero secreto`);
exibirtextonatela(`p`,`escolha um numero entre 1 e 10`);
}
mensageminicial()
   function verificarChute() {
    let chute = document.querySelector(`input`).value;
     //console.log(nuemerosecreto);
    if (chute== nuemerosecreto){
    exibirtextonatela('h1',`acertou`);
    let palavratentativa = tentativas >1 ? `tentativas` : `tentativa`
    let mensagemtentativa = `voce acerto com ${tentativas} ${palavratentativa}`
    exibirtextonatela('p', mensagemtentativa);
    document.getElementById (`reiniciar`).removeAttribute(`disabled`)

    }  else {
      if (chute> nuemerosecreto){
      exibirtextonatela(`p`,`o numero secreto é menor que ${chute}`);
      } else {
      exibirtextonatela('p',`o numero secreto é maior que ${chute}`);
      }
        tentativas == tentativas++
        limparCampo() 
          
    }
    
    }
         
   

      //while (chute != nuemerosecreto){
  
      //if (chute> nuemerosecreto)
       // exibirtextonatela(`h1`,`o numero é menor que ${chute}`)

      //if (chute < nuemerosecreto)
      //exibirtextonatela(`h1`,`o numero secreto é maior que ${chute}`)


       function gerarnumeroaleatorio() {
        let numeroescolhido = parseInt(Math.random()*numerolimite + 1);
        let quantidadedenumerosx = listadenumerossorteados.length;

        if (quantidadedenumerosx == numerolimite) {
          listadenumerossorteados= [];
        }
    if(listadenumerossorteados.includes(numeroescolhido)){
      return gerarnumeroaleatorio();

    } else {
        listadenumerossorteados.push(numeroescolhido);
        console.log(listadenumerossorteados)
        return numeroescolhido;
     }
    
    
    
    }
     function limparCampo() {chute = document.querySelector('input');
     chute.value = '';


     }
     function denovo() {
     nuemerosecreto= gerarnumeroaleatorio();
     limparCampo();
     tentativas = 1;
    
    mensageminicial()

    document.getElementById(`reiniciar`).setAttribute(`disabled`,true)
    
    }
  
    


