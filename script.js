var email = prompt('fornisci la tua email' );
var emailsistema = ["mario.rossi@gmail.com", "maria.rossi@gmail.com", "mario.bianchi@gmail.com"];
var trovata = false;

for (var i = 0; i < emailsistema.length; i++) {
if (emailsistema[i] == email) {
  trovata= true;
}


if (trovata == true) {
document.getElementById("esercizio").innerHTML = "Accesso consentito";
} else {
  document.getElementById('esercizio').innerHTML = "Non hai le autorizzazioni per accedere";
}
}
