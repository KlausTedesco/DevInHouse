function changePage(){
    var change = confirm("Você tem certeza que deseja trocar de página?");
    if( change == true ){
        location.href = "../ExercicioUm/index.html";
    } else{
        location.href = "index.html";
    }
 }
