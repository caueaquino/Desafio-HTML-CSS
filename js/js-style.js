// Javascript Document

function bthome(){
    resetbts();
    document.getElementById("ahome").style.borderRadius="0px 0px 0px 40px";
    document.getElementById("ahome").style.marginLeft="10%";
    document.getElementById("ahome").style.backgroundColor="rgb(10,10,10)";
    document.getElementById("ahome").style.boxShadow="-2px 0px 10px rgb(10, 10, 10);"
    document.getElementById("lihome").style.zIndex="3";
}

function btcontato(){
    resetbts();
    document.getElementById("acontatos").style.borderRadius="40px 0px 0px 40px";
    document.getElementById("acontatos").style.marginLeft="10%";
    document.getElementById("acontatos").style.backgroundColor="rgb(10,10,10)";
    document.getElementById("acontatos").style.boxShadow="-2px 0px 10px rgb(10, 10, 10);"
    document.getElementById("licontatos").style.zIndex="3";
}

function btfavorito(){
    resetbts();
    document.getElementById("afavoritos").style.borderRadius="40px 0px 0px 40px";
    document.getElementById("afavoritos").style.marginLeft="10%";
    document.getElementById("afavoritos").style.backgroundColor="rgb(10,10,10)";
    document.getElementById("afavoritos").style.boxShadow="-2px 0px 10px rgb(10, 10, 10);"
    document.getElementById("lifavoritos").style.zIndex="3";
}

function btlogout(){
    resetbts();
    document.getElementById("asair").style.borderRadius="40px 0px 0px 0px";
    document.getElementById("asair").style.marginLeft="10%";
    document.getElementById("asair").style.backgroundColor="rgb(10,10,10)";
    document.getElementById("asair").style.boxShadow="-2px 0px 10px rgb(10, 10, 10);"
    document.getElementById("lisair").style.zIndex="3";
}

function resetbts(){
    document.getElementById("ahome").style.borderRadius="0px 0px 0px 0px";
    document.getElementById("ahome").style.marginLeft="0%";
    document.getElementById("ahome").style.backgroundColor="rgba(10, 10, 10, 0)";
    document.getElementById("ahome").style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0);"
    document.getElementById("lihome").style.zIndex="2";
    document.getElementById("acontatos").style.borderRadius="0px 0px 0px 0px";
    document.getElementById("acontatos").style.marginLeft="0%";
    document.getElementById("acontatos").style.backgroundColor="rgba(10, 10, 10, 0)";
    document.getElementById("acontatos").style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0);"
    document.getElementById("licontatos").style.zIndex="2";
    document.getElementById("afavoritos").style.borderRadius="0px 0px 0px 0px";
    document.getElementById("afavoritos").style.marginLeft="0%";
    document.getElementById("afavoritos").style.backgroundColor="rgba(10, 10, 10, 0)";
    document.getElementById("afavoritos").style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0);"
    document.getElementById("lifavoritos").style.zIndex="2";
    document.getElementById("asair").style.borderRadius="0px 0px 0px 0px";
    document.getElementById("asair").style.marginLeft="0%";
    document.getElementById("asair").style.backgroundColor="rgba(10, 10, 10, 0)";
    document.getElementById("asair").style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0);"
    document.getElementById("lisair").style.zIndex="2";
}