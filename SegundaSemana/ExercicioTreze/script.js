var seasons = {
    "autumn": {
        "name": "Outono",
        "img": "img/autumn.jpg"
    },
    "winter": {
        "name": "Inverno",
        "img": "img/winter.jpg"
    },
    "spring": {
        "name": "Primavera",
        "img": "img/spring.jpg"
    },
    "summer": {
        "name": "Verão",
        "img": "img/summer.jpg"
    },
};

function obterEstacao() {
    var today = new Date();
    var month = today.getMonth();
    var season = null;

    switch ( month ){
        case 3:
        case 4:
        case 5:
            season = seasons['autumn'];
            break;
        case 6:
        case 7:
        case 8:
            season = seasons['winter'];
            break;
        case 9:
        case 10:
        case 11:
            season = seasons['spring'];
            break;
        case 12:
        case 1:
        case 2:
            season = seasons['summer'];
            break;
        default:
            break;
    }

    atualizarEstacao(season);
}

obterEstacao();

function atualizarEstacao( seasons ) {
    document.getElementById("title-seasons").innerHTML = '<h2> ' + seasons.name + ' </h2>';
    document.getElementById("image-seasons").innerHTML = '<img src=" '+ seasons.img +' " alt=" Imagem representando '+ seasons.name +' "></img>';
}
