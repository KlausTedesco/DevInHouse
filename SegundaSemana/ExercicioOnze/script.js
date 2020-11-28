var newHour = new Date();

var hour = newHour.getHours();
var minute = newHour.getMinutes();

document.getElementById( 'clock' ).textContent = "Horário que você acessou a página " + hour + " : " + minute + ".";