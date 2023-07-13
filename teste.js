var SegundoOperando = '13:31'
var hora = '14:22'

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

console.log(RealizarSoma())