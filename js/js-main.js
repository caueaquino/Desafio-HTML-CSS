// Javascript Document

var x=0;

function cbtlogout(){
    document.getElementById("container-logout").style.display="flex";
}

function cbtsim(){
    window.location.href="./index.html";
}

function cbtnao(){
    document.getElementById("container-logout").style.display="none";
    if(x==0){
        bthome();
    }else if(x==1){
        btcontato();
    }else{
        btfavorito();
    }
}

function bthome(){
    resetbts();
    document.getElementById("ahome").style.backgroundColor="rgb(35, 68, 255)";
    document.getElementById("ahome").style.boxShadow="2px 0px 10px rgb(10, 10, 10)";
    document.getElementById("lihome").style.zIndex="3";
    document.getElementById("container-contatos").style.display="none";
    document.getElementById("container-favoritos").style.display="none";
    document.getElementById("container-main").style.display="flex";
    x=0;
}

function btcontato(){
    resetbts();
    document.getElementById("acontatos").style.backgroundColor="rgb(35, 68, 255)";
    document.getElementById("acontatos").style.boxShadow="2px 0px 10px rgb(10, 10, 10)";
    document.getElementById("licontatos").style.zIndex="3";
    document.getElementById("container-favoritos").style.display="none";
    document.getElementById("container-main").style.display="none";
    document.getElementById("container-contatos").style.display="flex";
    x=1;
}

function btfavorito(){
    resetbts();
    document.getElementById("afavoritos").style.backgroundColor="rgb(35, 68, 255)";
    document.getElementById("afavoritos").style.boxShadow="2px 0px 10px rgb(10, 10, 10)";
    document.getElementById("lifavoritos").style.zIndex="3";
    document.getElementById("container-main").style.display="none";
    document.getElementById("container-contatos").style.display="none";
    document.getElementById("container-favoritos").style.display="flex";
    x=2;
}

function btlogout(){
    resetbts();
    document.getElementById("asair").style.backgroundColor="rgb(35, 68, 255)";
    document.getElementById("asair").style.boxShadow="2px 0px 10px rgb(10, 10, 10)";
    document.getElementById("lisair").style.zIndex="3";
}

function resetbts(){
    document.getElementById("ahome").style.backgroundColor="rgba(10, 10, 10, 0)";
    document.getElementById("ahome").style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0)";
    document.getElementById("lihome").style.zIndex="2";
    document.getElementById("acontatos").style.backgroundColor="rgba(10, 10, 10, 0)";
    document.getElementById("acontatos").style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0)";
    document.getElementById("licontatos").style.zIndex="2";
    document.getElementById("afavoritos").style.backgroundColor="rgba(10, 10, 10, 0)";
    document.getElementById("afavoritos").style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0)";
    document.getElementById("lifavoritos").style.zIndex="2";
    document.getElementById("asair").style.backgroundColor="rgba(10, 10, 10, 0)";
    document.getElementById("asair").style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0)";
    document.getElementById("lisair").style.zIndex="2";
}