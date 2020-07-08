var email = prompt('fornisci la tua email' )
var emailsistema = [ "mario.rossi@gmail.com" , "maria.rossi@gmail.com"]

for (var i = 0; i < emailsistema.length-1; i++) {
  if (emailsistema[i] == email) {
  document.getElementById("esercizio").innerHTML = "Puoi accedere";
} else{
  document.getElementById("esercizio").innerHTML = "L' accesso non è autorizzato";
}
}
