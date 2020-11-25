alert("Este site tem como finalidade resolver exercicios do curso DevInHouse.");

function changePage(){
    var change = confirm("Você tem certeza que deseja trocar de página?");
    if( change == true ){
        location.href = "images.html";
    } else{
        location.href = "index.html";
    }
 }

 function showName( id ){
    var name = document.getElementById( id ).value;
    alert( "Seja bem-vindo(a) " + name + "!!!");
 }
