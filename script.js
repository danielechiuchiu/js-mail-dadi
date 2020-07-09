// var email = prompt('fornisci la tua email' );
// var emailsistema = ["mario.rossi@gmail.com", "maria.rossi@gmail.com", "mario.bianchi@gmail.com"];
// var trovata = false;
//
// for (var i = 0; i < emailsistema.length; i++) {
// if (emailsistema[i] == email) {
//   trovata= true;
// }
// }
//
// if (trovata == true) {
// document.getElementById("esercizio").innerHTML = "Accesso consentito";
// } else {
// document.getElementById('esercizio').innerHTML = "Non hai le autorizzazioni per accedere";
// }

var dadoutente = Math.floor(Math.random()*6)+1
console.log(dadoutente)

document.getElementById("dadoutente").innerHTML= 'Dado Utente: ' + dadoutente;

var dadocomputer = Math.floor(Math.random()*6)+1
console.log(dadocomputer)
document.getElementById("dadocomputer").innerHTML= 'Dado Computer: ' + dadocomputer;

if (dadoutente > dadocomputer) {
  var risultato = 'Ha vinto l\' utente'
} else
  var risultato = 'Ha vinto il computer'

if (dadoutente == dadocomputer) {
  var risultato = 'Ha vinto Daniele :)'
}
document.getElementById("esercizio").innerHTML= risultato;
