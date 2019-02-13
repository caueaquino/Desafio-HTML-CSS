// Javascript Document

let x=0;
let y=0;

let contatos=[];

let favoritos=[];

let contato={
    firstName: "",
    lastName: "",
    email: "", 
    gender: "",
    info: {
        avatar: "",
        company: "",
        adress: "",
        phone: "",
        comments: ""
    },
    isFavorite: false,
    id: ""
}

function btMenu(){
    if(y==0){
        document.getElementById("container-side").style.display="flex";
        document.getElementById("btmenu").style.left="270px";
        y=1;
    }else{
        document.getElementById("container-side").style.display="none";
        document.getElementById("btmenu").style.left="10px";
        y=0;
    }
}

function search(){

}

function cadastrarContato(){
    document.getElementById("container-cadastrar").style.display="flex";
}

function btConfirmarCadastro(){
    contato.firstName=document.getElementById("inome").value;
    contato.lastName=document.getElementById("isobrenome").value;
    contato.email=document.getElementById("iemail").value;
    if(document.getElementById("imasculino").checked==true){
        contato.gender="m";
    }else if(document.getElementById("ifeminino").checked==true){
        contato.gender="f";
    }else{
        contato.gender="";
    }
    contato.info.avatar=document.getElementById("iavatar").value;
    contato.info.company=document.getElementById("icompanhia").value;
    contato.info.adress=document.getElementById("iendereco").value;
    contato.info.phone=document.getElementById("itelefone").value;
    contato.info.comments=document.getElementById("icomentario").value;
    contato.isFavorite=document.getElementById("iisfavorite").checked;
    
    contatos.push(contato);

    limpaTelaCadastro();
}

function btCancelarCadastro(){
    limpaTelaCadastro();
}

function limpaTelaCadastro(){
    document.getElementById("inome").value="";
    document.getElementById("isobrenome").value="";
    document.getElementById("iemail").value="";
    document.getElementById("imasculino").checked=false;
    document.getElementById("ifeminino").checked=false;
    document.getElementById("icompanhia").value="";
    document.getElementById("iendereco").value="";
    document.getElementById("itelefone").value="";
    document.getElementById("icomentario").value="";
    document.getElementById("iisfavorite").checked=false;
    document.getElementById("container-cadastrar").style.display="none";
}

function visualizarContato(){
    document.getElementById("container-vcont").style.display="flex";
}

function btConfirmarPerfil(){
    document.getElementById("container-vcont").style.display="none";
}

function btCancelarPerfil(){
    document.getElementById("container-vcont").style.display="none";
}

function btContato(){
    resetbts();
    document.getElementById("acontatos").style.backgroundColor="rgb(35, 68, 255)";
    document.getElementById("acontatos").style.boxShadow="2px 0px 10px rgb(10, 10, 10)";
    document.getElementById("licontatos").style.zIndex="3";
    x=1;

    document.getElementById("h2-type").innerText="Contatos";
}

function btFavorito(){
    resetbts();
    document.getElementById("afavoritos").style.backgroundColor="rgb(35, 68, 255)";
    document.getElementById("afavoritos").style.boxShadow="2px 0px 10px rgb(10, 10, 10)";
    document.getElementById("lifavoritos").style.zIndex="3";
    x=2;

    document.getElementById("h2-type").innerText="Favoritos";
}

function resetbts(){
    document.getElementById("acontatos").style.backgroundColor="rgba(10, 10, 10, 0)";
    document.getElementById("acontatos").style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0)";
    document.getElementById("licontatos").style.zIndex="2";
    document.getElementById("afavoritos").style.backgroundColor="rgba(10, 10, 10, 0)";
    document.getElementById("afavoritos").style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0)";
    document.getElementById("lifavoritos").style.zIndex="2";
}