// Javascript Document


import * as ith from './elementsHTML';
import * as dtc from './dataContacts';
import * as app from './api';
import * as vc from './viewContact';
import * as ca from './contactArea';


var favicon = require('../img/favorit-icon.png');


export let confirmEdit = () => {
    dtc.constContato(ith.en().value, ith.es().value, ith.eem().value, dtc.contato.gender, ith.ea().value, ith.ecomp().value, ith.ee().value, ith.et().value, ith.ec().value, dtc.contato.isFavorite, dtc.contato.id);
}

export let cancelEdit = () => {
    ith.ialert().innerHTML='<div id="internal-alert">'+
                            '<h1>Ao cancelar os dados serão perdidos, deseja prosseguir?</h1>'+
                            '<button id="yesEdit">Sim</button>'+
                            '<button id="noEdit">Não</button>'+
                        '</div>';

    ith.ealerts().style.display="flex";
    ith.ealerts().style.zIndex="15";

    ith.yce().onclick = () => {
        yesCancelEdit();
    }
    
    ith.nce().onclick = () => {
        noCancelEdit();
    }
}

export let yesCancelEdit = () => {
    ith.ea().value=dtc.contato.avatar;
    ith.en().value=dtc.contato.firstName;
    ith.es().value=dtc.contato.lastName;
    ith.eem().value=dtc.contato.email;
    ith.ecomp().value=dtc.contato.info.company;
    ith.ee().value=dtc.contato.info.address;
    ith.et().value=dtc.contato.info.phone;
    ith.ec().value=dtc.contato.info.comments;

    closeAlert();
    vc.disableEdit();
    vc.hideEdit();
}

export let noCancelEdit = () => {
    closeAlert();
}

export let alertClose = () => {
    ith.ialert().innerHTML='<div id="internal-alert">'+
                            '<h1>Deseja salvar as mudanças?</h1>'+
                            '<button id="closeEditYes">Sim</button>'+
                            '<button id="closeEditNo">Não</button>'+
                        '</div>';

    ith.ealerts().style.display="flex";
    ith.ealerts().style.zIndex="15";

    ith.cey().onclick = () => {
        saveChanges();
    }

    ith.cen().onclick = () => {
        closeAlert();
        vc.btCloseView();
    }
}

export let saveChanges = () => {
    
    confirmEdit();

    if(app.updateContact(dtc.contato.id)){

        dtc.changeContato(dtc.contato, dtc.pcontact);

        if(dtc.changeFavorite==1){
            
            for(let i=0;i<dtc.favoritos.length;i++){
            
                if(dtc.contato.id==dtc.favoritos[i].id){
                    dtc.removeFavorite(i);
                }
            }

        }else if(dtc.changeFavorite==2){
            
            for(let i=0;i<dtc.favoritos.length;i++){
                
                if(dtc.contato.id==dtc.favoritos[i].id){
                    dtc.pushFavoritos(dtc.contato);
                }
            }        
        
        }else{
            for(let i=0;i<dtc.favoritos.length;i++){
                
                if(dtc.contato.id==dtc.favoritos[i].id){
                    dtc.changeFavorites(dtc.contato, i);
                }
            }    
        }
    }
    
    dtc.setChangeFavorite(0);
    closeAlert();
    vc.btCloseView();
    ca.renderContacts(dtc.xcf);
}

export let alertDelete = () => {
    ith.ialert().innerHTML='<div id="internal-alert">'+
                            '<h1>Deseja realmente deletar esta Contato?</h1>'+
                            '<button id="yesDel">Sim</button>'+
                            '<button id="noDel">Não</button>'+
                        '</div>';

    ith.ealerts().style.display="flex";
    ith.ealerts().style.zIndex="15";

    ith.yd().onclick = () => {
        contactDelete();
    }
    
    ith.nd().onclick = () =>{
        closeAlert();
    }
}

export let contactDelete = () => {
    
    if(app.removeContact(dtc.contato.id)){

        dtc.removeContato(dtc.pcontact);

        if(dtc.contato.isFavorite==true){

            for(let i=0; i<dtc.favoritos.length;i++){

                if(dtc.contato.id==dtc.favoritos[i].id){
                    
                    dtc.removeFavorite(i);
                    break;
                }
            }
        }
    }

    closeAlert();
    vc.btCloseView();
    ca.renderContacts(dtc.xcf);
}

export let alertFavorite = () => {
    ith.ialert().innerHTML='<div id="internal-alert">'+
                            '<h1>Deseja realmente realizar esta alteração?</h1>'+
                            '<button id="btfs">Sim</button>'+
                            '<button id="btfn">Não</button>'+
                        '</div>';

    ith.ealerts().style.display="flex";
    ith.ealerts().style.zIndex="15";

    ith.bfs().onclick = () => {
        contactFavorite();
    }
    
    ith.bfn().onclick = () => {
        closeAlert();
    }
}

export let contactFavorite = () => {
    if(dtc.contato.isFavorite==true){
        dtc.setChangeFavorite(1);
        dtc.setFavoriteContact(false);
        ith.ipf().innerHTML="<h2 id='ipf'>Perfil Contato</h2>";
    
    }else{
        dtc.setChangeFavorite(2);
        dtc.setFavoriteContact(true);
        ith.ipf().innerHTML='<h2 id="ipf"><img alt="favorito" src="'+favicon+'" height="30px" width="30px">Perfil Contato</h2>';
        
    }
    closeAlert();
}


export let closeAlert = () => {
    ith.ealerts().style.display="none";
    ith.ealerts().style.zIndex="0";
}