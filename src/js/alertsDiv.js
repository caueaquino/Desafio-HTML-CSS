// Javascript Document

let confirmEdit = () => {
    contato.avatar=ea().value;
    contato.firstName=en().value;
    contato.lastName=es().value;
    contato.email=eem().value;
    contato.info.company=ecomp().value;
    contato.info.address=ee().value;
    contato.info.phone=et().value;
    contato.info.comments=ec().value;
}

let cancelEdit = () => {
    ialert().innerHTML='<div id="internal-alert">'+
                            '<h1>Ao cancelar os dados serão perdidos, deseja prosseguir?</h1>'+
                            '<button onclick="yesCancelEdit()">Sim</button>'+
                            '<button onclick="noCancelEdit()">Não</button>'+
                        '</div>';

    ealerts().style.display="flex";
    ealerts().style.zIndex="15";
}

let yesCancelEdit = () => {
    ea().value=contato.avatar;
    en().value=contato.firstName;
    es().value=contato.lastName;
    eem().value=contato.email;
    ecomp().value=contato.info.company;
    ee().value=contato.info.address;
    et().value=contato.info.phone;
    ec().value=contato.info.comments;

    closeAlert();
    disableEdit();
    hideEdit();
}

let noCancelEdit = () => {
    closeAlert();
}

let alertClose = () => {
    ialert().innerHTML='<div id="internal-alert">'+
                            '<h1>Deseja salvar as mudanças?</h1>'+
                            '<button onclick="saveChanges()">Sim</button>'+
                            '<button onclick="closeAlert(), btCloseView()">Não</button>'+
                        '</div>';

    ealerts().style.display="flex";
    ealerts().style.zIndex="15";
}

let saveChanges = () => {
    
    confirmEdit();

    updateContact(contato.id);

    contatos[pcontact]=contato;

    if(changeFavorite==1){
        
        for(i=0;i<favoritos.length;i++){
           
            if(contato.id==favoritos[i].id){
                favoritos.splice(i, 1);
            }
        }

    }else if(changeFavorite==2){
        
        for(i=0;i<favoritos.length;i++){
            
            if(contato.id==favoritos[i].id){
                favoritos.push(contato);
            }
        }        
    
    }else{
        for(i=0;i<favoritos.length;i++){
            
            if(contato.id==favoritos[i].id){
                favoritos[i]=contato;
            }
        }    
    }

    changeFavorite=0;
    closeAlert();
    btCloseView();
    renderContacts(xcf);
}

let alertDelete = () => {
    ialert().innerHTML='<div id="internal-alert">'+
                            '<h1>Deseja realmente deletar esta Contato?</h1>'+
                            '<button onclick="contactDelete()">Sim</button>'+
                            '<button onclick="closeAlert()">Não</button>'+
                        '</div>';

    ealerts().style.display="flex";
    ealerts().style.zIndex="15";
}

let contactDelete = () => {
    
    if(removeContact(contato.id)){

        contatos.splice(pcontact, 1);

        if(contato.isFavorite==true){

            for(i=0; i<favoritos.length;i++){

                if(contato.id==favoritos[i].id){
                    
                    favoritos.splice(i, 1);
                    break;
                }
            }
        }
    }

    closeAlert();
    btCloseView();
    renderContacts(xcf);
}

let alertFavorite = () => {
    ialert().innerHTML='<div id="internal-alert">'+
                            '<h1>Deseja realmente favoritar esta Contato?</h1>'+
                            '<button onclick="contactFavorite()">Sim</button>'+
                            '<button onclick="closeAlert()">Não</button>'+
                        '</div>';

    ealerts().style.display="flex";
    ealerts().style.zIndex="15";
}

let contactFavorite = () => {
    if(contato.isFavorite==true){
        changeFavorite=1;
        contato.isFavorite=false;
        ipf().innerHTML="<h2 id='ipf'>Perfil Contato</h2>";
    
    }else{
        changeFavorite=2;
        contato.isFavorite=true;
        ipf().innerHTML='<h2 id="ipf"><img alt="favorito" src="./img/favorit-icon.png" height="30px" width="30px">Perfil Contato</h2>';
        
    }
    closeAlert();
}


let closeAlert = () => {
    ealerts().style.display="none";
    ealerts().style.zIndex="0";
}