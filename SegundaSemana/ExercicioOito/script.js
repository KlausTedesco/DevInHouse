function getAge( id ){
    var dateBirth = document.getElementById( id ).value;
    var dateBirthFormat = new Date( dateBirth );

    var age = new Date().getFullYear() - dateBirthFormat.getFullYear();

    return document.getElementById("showAge").innerHTML = "Sua idade é " + age;
 }