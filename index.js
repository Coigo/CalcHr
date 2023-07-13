var AllNumbersInArray = []
var numbersjoined
var operacaoEscolhida
var SegundoOperando
var hora

 




const displayOperando = document.getElementById('Operando')
const displayHora = document.getElementById('Hora')
document.getElementById('keyboard').addEventListener('click', () => {
    DistinguirOperandos()

    if (operacaoEscolhida === undefined) {
        AtualizarDisplayHora()
    }
    else {
        EscolherEstruturaDoOperando()
        AtualizarDisplayOperando()
    }

})

function AtualizarDisplayHora() {
    if ( operacaoEscolhida === undefined ) {
        displayHora.innerHTML = MascararHora()
    }
    else {
        displayHora.innerHTML = hora
    }
}
function AtualizarDisplayOperando() {
    if (operacaoEscolhida != undefined) {
        displayOperando.innerHTML = SegundoOperando
    }
}



        function NovoNumeroAdicionado(num) {
            AllNumbersInArray.push(num)

            function JuntarArray() {
                return AllNumbersInArray.join('')
            }
            numbersjoined = JuntarArray()
        }



        function EscolherOperacao(operacao) {
        operacaoEscolhida = operacao
        ComecarSegundoOperando()
        }



                function DistinguirOperandos() {
                    if ( operacaoEscolhida === undefined ) {
                        hora = MascararHora()

                    }
                    else {
                        SegundoOperando = EscolherEstruturaDoOperando(numbersjoined)
                        console.log(SegundoOperando)
                    }
                }

function ComecarSegundoOperando() {
    AllNumbersInArray = []
    numbersjoined = 0
}


const Operacoes = {
    somar() { 
        return RealizarSoma()
    },
    subtrair() { 
        console.log('oi')
    },
    multiplicar() { 
        console.log('oi')
    },
    dividir() { 
        console.log('oi')
    }
}

function igual() {
    Operacoes[operacaoEscolhida]()
    
}


function MascararHora() {
    const numeroString = numbersjoined.toString();
    const comprimentoMaximo = Math.max(4, numeroString.length);
    const numeroFormatado = numeroString.padStart(comprimentoMaximo, '0');
    return numeroFormatado.substr(0, comprimentoMaximo - 2) + ':' + numeroFormatado.substr(comprimentoMaximo - 2);
  }
  
  function EscolherEstruturaDoOperando() {
    console.log('escolhendo');
    if (operacaoEscolhida === 'somar' || operacaoEscolhida === 'subtrair') {
      return MascararHora(numbersjoined);
    } else {
      return numbersjoined;
    }
  }


  function RealizarSoma() {
    var horaAtual = hora.split(":");
    var horaAtualizada = new Date();
    horaAtualizada.setHours(horaAtual[0]);
    horaAtualizada.setMinutes(horaAtual[1]);
    
    var segundoOperandoSplit = SegundoOperando.split(":");
    var segundoOperandoAtualizado = new Date();
    segundoOperandoAtualizado.setHours(segundoOperandoSplit[0]);
    segundoOperandoAtualizado.setMinutes(segundoOperandoSplit[1]);
  
    var soma = new Date(horaAtualizada.getTime() + segundoOperandoAtualizado.getTime());
    var horas = soma.getHours();
    var minutos = soma.getMinutes();
    
    // Formatação de horas e minutos para hh:mm
    horas = horas.toString().padStart(2, '0');
    minutos = minutos.toString().padStart(2, '0');
    
    var horaFinal = horas + ":" + minutos;
    return horaFinal;
  }


