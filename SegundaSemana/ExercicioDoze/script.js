function updateHour(){
    var newHour = new Date();

    var hour = newHour.getHours();
    var minute = newHour.getMinutes();

    document.getElementById( 'clock' ).textContent = "Agora são " + hour + " horas e " + minute + " minutos";
}
updateHour();

setInterval( updateHour, 1000 );