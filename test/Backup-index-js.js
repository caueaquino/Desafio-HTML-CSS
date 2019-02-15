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
};

let setData = () => {
    
    btContato();
}

let btMenu = () => {
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

let search = () => {

}

let cadastrarContato = () => {
    document.getElementById("container-cadastrar").style.display="flex";
}

let btConfirmarCadastro = () => {
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

    if(contato.isFavorite==true){
        favoritos.push(contato);
    }

    limpaTelaCadastro();
    btContato();
}

let btCancelarCadastro = () => {
    limpaTelaCadastro();
}

let limpaTelaCadastro = () => {
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

let contactView = () => {
    document.getElementById("eavatar").value="./img/user.png";
    document.getElementById("enome").value="caue";
    document.getElementById("esobrenome").value="aquino nogueira";
    document.getElementById("eemail").value="caue@forlogic.net";
    document.getElementById("ecompanhia").value="forlogic";
    document.getElementById("eendereco").value="rua avenida cidade";
    document.getElementById("etelefone").value="11964984447";
    document.getElementById("ecomentario").value="algum comentario";
    document.getElementById("container-vcont").style.display="flex";
}

let editContact = () => {
    document.getElementById("eavatar").disabled=false;
    document.getElementById("enome").disabled=false;
    document.getElementById("esobrenome").disabled=false;
    document.getElementById("eemail").disabled=false;
    document.getElementById("ecompanhia").disabled=false;
    document.getElementById("eendereco").disabled=false;
    document.getElementById("etelefone").disabled=false;
    document.getElementById("ecomentario").disabled=false;

    document.getElementById("eavatar").style.backgroundColor="white";
    document.getElementById("enome").style.backgroundColor="white";
    document.getElementById("esobrenome").style.backgroundColor="white";
    document.getElementById("eemail").style.backgroundColor="white";
    document.getElementById("ecompanhia").style.backgroundColor="white";
    document.getElementById("eendereco").style.backgroundColor="white";
    document.getElementById("etelefone").style.backgroundColor="white";
    document.getElementById("ecomentario").style.backgroundColor="white";

    document.getElementById("eavatar").style.border="1px solid rgba(0, 0, 0, 0.63)";
    document.getElementById("enome").style.border="1px solid rgba(0, 0, 0, 0.63)";
    document.getElementById("esobrenome").style.border="1px solid rgba(0, 0, 0, 0.63)";
    document.getElementById("eemail").style.border="1px solid rgba(0, 0, 0, 0.63)";
    document.getElementById("ecompanhia").style.border="1px solid rgba(0, 0, 0, 0.63)";
    document.getElementById("eendereco").style.border="1px solid rgba(0, 0, 0, 0.63)";
    document.getElementById("etelefone").style.border="1px solid rgba(0, 0, 0, 0.63)";
    document.getElementById("ecomentario").style.border="1px solid rgba(0, 0, 0, 0.63)";

    document.getElementById("btEditSair").style.display="none";
    document.getElementById("btEditConf").style.display="block";
    document.getElementById("btEditCanc").style.display="block";
}

let deleteContact = () => {

}

let btConfirmarPerfil = () =>{
    disableEdit();
    hideEdit();
}

let btCancelarPerfil = () => {
    disableEdit();
    hideEdit();
}

let btCloseView = () => {
    document.getElementById("container-vcont").style.display="none";
}

let disableEdit = () => {
    document.getElementById("eavatar").disabled=true;
    document.getElementById("enome").disabled=true;
    document.getElementById("esobrenome").disabled=true;
    document.getElementById("eemail").disabled=true;
    document.getElementById("ecompanhia").disabled=true;
    document.getElementById("eendereco").disabled=true;
    document.getElementById("etelefone").disabled=true;
    document.getElementById("ecomentario").disabled=true;
}

let hideEdit = () =>{
    document.getElementById("btEditConf").style.display="none";
    document.getElementById("btEditCanc").style.display="none";
    document.getElementById("btEditSair").style.display="block";

    document.getElementById("eavatar").style.backgroundColor="rgba(240, 248, 255, 0)";  
    document.getElementById("enome").style.backgroundColor="rgba(240, 248, 255, 0)";
    document.getElementById("esobrenome").style.backgroundColor="rgba(240, 248, 255, 0)";
    document.getElementById("eemail").style.backgroundColor="rgba(240, 248, 255, 0)";
    document.getElementById("ecompanhia").style.backgroundColor="rgba(240, 248, 255, 0)";
    document.getElementById("eendereco").style.backgroundColor="rgba(240, 248, 255, 0)";
    document.getElementById("etelefone").style.backgroundColor="rgba(240, 248, 255, 0)";
    document.getElementById("ecomentario").style.backgroundColor="rgba(240, 248, 255, 0)";

    document.getElementById("eavatar").style.border="none";
    document.getElementById("enome").style.border="none";
    document.getElementById("esobrenome").style.border="none";
    document.getElementById("eemail").style.border="none";
    document.getElementById("ecompanhia").style.border="none";
    document.getElementById("eendereco").style.border="none";
    document.getElementById("etelefone").style.border="none";
    document.getElementById("ecomentario").style.border="none";
}

let btContato = () => {
    resetbts();
    document.getElementById("acontatos").style.backgroundColor="rgb(35, 68, 255)";
    document.getElementById("acontatos").style.boxShadow="2px 0px 10px rgb(10, 10, 10)";
    document.getElementById("licontatos").style.zIndex="3";
    document.getElementById("not-contacts").style.display="none";
    x=0;

    document.getElementById("h2-type").innerText="Contatos";
    if(contatos.length>0){

        let x=document.getElementById("contacts-field");

        x.innerHTML='<div id="contacts-field">'+
                        '<h2 id="not-contacts">Não Há Contatos Cadastrados !</h2>'+
                        '<h2 id="not-favorits">Não Há Contatos Favoritos !</h2>'+
                    '</div>';

        for(i=0;i<10||i<contatos.length;i++){

            let d=document.createElement("div");

            d.innerHTML='<div class="contact-data">'+
                            '<img src="'+contatos[i].info.avatar+'" height="230px" width="230px">'+
                            '<label class="lcontact">Contato:</label><label>'+contatos[i].firstName+'&nbsp'+contatos[i].lastName+'</label>'+
                                
                            '<div class="internal-view">'+
                                '<button onclick="contactView()">Visualizar'+
                                    '<img src="./img/icon-view.png" alt="Icone-Visualizar" height="30px" width="30px">'+
                                '</button>'+
                            '</div>'+
                        '</div>';

            x.appendChild(d);  
        }
    }else{
        document.getElementById("not-contacts").style.display="block";
    }
}

let btFavorito = () => {
    resetbts();
    document.getElementById("afavoritos").style.backgroundColor="rgb(35, 68, 255)";
    document.getElementById("afavoritos").style.boxShadow="2px 0px 10px rgb(10, 10, 10)";
    document.getElementById("lifavoritos").style.zIndex="3";
    document.getElementById("not-favorits").style.display="none";
    x=1;

    document.getElementById("h2-type").innerText="Favoritos";

    if(favoritos.length>0){

        let x=document.getElementById("contacts-field");

        x.innerHTML='<div id="contacts-field">'+
                        '<h2 id="not-contacts">Não Há Contatos Cadastrados !</h2>'+
                        '<h2 id="not-favorits">Não Há Contatos Favoritos !</h2>'+
                    '</div>';

        for(i=0;i<10||i<favoritos.length;i++){
            
            let d=document.createElement("div");

            d.innerHTML='<div class="contact-data">'+
                            '<img src="'+favoritos[i].info.avatar+'" height="230px" width="230px">'+
                            '<label class="lcontact">Contato:</label><label>'+favoritos[i].firstName+'&nbsp'+favoritos[i].lastName+'</label>'+
                            
                            '<div class="internal-view">'+
                                '<button id="'+favoritos[i].id+'" onclick="contactView()">Visualizar'+
                                    '<img src="./img/icon-view.png" alt="Icone-Visualizar" height="30px" width="30px">'+
                                 '</button>'+
                            '</div>'+
                        '</div>';

            x.appendChild(d);
        }
    }else{
        document.getElementById("not-favorits").style.display="block";
    }
}

let resetbts = () => {
    document.getElementById("acontatos").style.backgroundColor="rgba(10, 10, 10, 0)";
    document.getElementById("acontatos").style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0)";
    document.getElementById("licontatos").style.zIndex="2";
    document.getElementById("afavoritos").style.backgroundColor="rgba(10, 10, 10, 0)";
    document.getElementById("afavoritos").style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0)";
    document.getElementById("lifavoritos").style.zIndex="2";
    document.getElementById("not-contacts").style.display="none";
    document.getElementById("not-favorits").style.display="none";
}