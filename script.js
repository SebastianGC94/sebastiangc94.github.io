let menuVisible = false;
//Función ocultar/mostrar menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar menu luego de seleccionar opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Aplicar animaciones barras de progreso
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("requerimientos");
        habilidades[1].classList.add("fundamentos");
        habilidades[2].classList.add("web");
        habilidades[3].classList.add("android");
        habilidades[4].classList.add("escritorio");
        habilidades[5].classList.add("basesdedatos");
        habilidades[6].classList.add("controlversiones");
        habilidades[7].classList.add("apis");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("equipo");
        habilidades[10].classList.add("liderazgo");
        habilidades[11].classList.add("objetivos");
        habilidades[12].classList.add("motivacion");
        habilidades[13].classList.add("ingles");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 