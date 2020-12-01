var listItems = [];

function getAdd( id ){
    var item = document.getElementById( id ).value;
    if( !item ){
        alert( "Campo do item está vazio, favor inserir algo." );
    }else{
        listItems.push( item );
        showItem();
        clear( id );
    }
}

function showItem(){
    var text = "";
    for (i = 0; i < listItems.length; i = i + 1) {
        text += "<option value=' " + listItems[i] + " ' selected = 'selected'> " + listItems[i] + "</option>";
    }
    return document.getElementById( "check-items" ).innerHTML = text;
}

function clear( id ){
    document.getElementById( id ).value = "";
}

function saveList(){
    var count = 0;
    localStorage.clear();

    for (i = 0; i < listItems.length; i = i + 1) {
        localStorage.setItem( JSON.stringify( count++ ), JSON.stringify( listItems[i] ) );
    }
    alert( "Nova lista salva com sucesso" );
}

function getList() {
    if( !localStorage.length ){
        alert( "Não há itens salvos" );
        document.getElementById( "list-items" ).innerHTML = "";
    }

    if ( localStorage.length > 0 ) {
        var text = "";
        for (i = 0; i < localStorage.length; i = i + 1) {
            text += "<li>" + JSON.parse( localStorage.getItem( i ) ) + "</li>";
        }
        return document.getElementById( "list-items" ).innerHTML = "<ul>" + text + "</ul>";
    } 
}