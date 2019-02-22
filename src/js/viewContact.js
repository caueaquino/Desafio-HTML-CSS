// Javascript Document


import * as ith from './elementsHTML';
import * as ad from './alertsDiv';
import * as dtc from './dataContacts';
import { searchContacts } from './search';


const favicon=require('../img/favorit-icon.png');


export const contactView = (aux) => {
    dtc.setPContact(aux);

    dtc.setContato(dtc.contatos[aux]);

    ith.ea().value=dtc.contatos[aux].info.avatar;
    ith.en().value=dtc.contatos[aux].firstName;
    ith.es().value=dtc.contatos[aux].lastName;
    ith.eem().value=dtc.contatos[aux].email;
    ith.ecomp().value=dtc.contatos[aux].info.company;
    ith.ee().value=dtc.contatos[aux].info.address;
    ith.et().value=dtc.contatos[aux].info.phone;
    ith.ec().value=dtc.contatos[aux].info.comments;

    ith.ipf().innerHTML="<h2 id='ipf'>Perfil Contato</h2>";

    if(dtc.contatos[aux].isFavorite==true){
        ith.ipf().innerHTML='<h2 id="ipf"><img alt="favorito" src="'+favicon+'" height="30px" width="30px">Perfil Contato</h2>';
    }

    ith.cvc().style.display="flex";

    ith.contc().style.display="none";
}

export const favoriteView = (aux) => {
    dtc.setPContact(aux);

    dtc.setContato(dtc.favoritos[aux]);

    ith.ea().value=dtc.favoritos[aux].info.avatar;
    ith.en().value=dtc.favoritos[aux].firstName;
    ith.es().value=dtc.favoritos[aux].lastName;
    ith.eem().value=dtc.favoritos[aux].email;
    ith.ecomp().value=dtc.favoritos[aux].info.company;
    ith.ee().value=dtc.favoritos[aux].info.address;
    ith.et().value=dtc.favoritos[aux].info.phone;
    ith.ec().value=dtc.favoritos[aux].info.comments;

    ith.ipf().innerHTML="<h2 id='ipf'>Perfil Contato</h2>";


    ith.ipf().innerHTML='<h2 id="ipf"><img alt="favorito" src="'+favicon+'" height="30px" width="30px">Perfil Contato</h2>';

    ith.cvc().style.display="flex";

    ith.contc().style.display="none";
}


export const searchView = (aux) => {
    dtc.setPContact(aux);

    dtc.setContato(searchContacts[aux]);

    ith.ea().value=searchContacts[aux].info.avatar;
    ith.en().value=searchContacts[aux].firstName;
    ith.es().value=searchContacts[aux].lastName;
    ith.eem().value=searchContacts[aux].email;
    ith.ecomp().value=searchContacts[aux].info.company;
    ith.ee().value=searchContacts[aux].info.address;
    ith.et().value=searchContacts[aux].info.phone;
    ith.ec().value=searchContacts[aux].info.comments;

    ith.ipf().innerHTML="<h2 id='ipf'>Perfil Contato</h2>";

    if(searchContacts[aux].isFavorite==true){
        ith.ipf().innerHTML='<h2 id="ipf"><img alt="favorito" src="'+favicon+'" height="30px" width="30px">Perfil Contato</h2>';
    }

    ith.cvc().style.display="flex";

    ith.contc().style.display="none";
}

export const editContact = () => {
    ith.ea().disabled=false;
    ith.en().disabled=false;
    ith.es().disabled=false;
    ith.eem().disabled=false;
    ith.ecomp().disabled=false;
    ith.ee().disabled=false;
    ith.et().disabled=false;
    ith.ec().disabled=false;

    ith.ea().style.backgroundColor="white";
    ith.en().style.backgroundColor="white";
    ith.es().style.backgroundColor="white";
    ith.eem().style.backgroundColor="white";
    ith.ecomp().style.backgroundColor="white";
    ith.ee().style.backgroundColor="white";
    ith.et().style.backgroundColor="white";
    ith.ec().style.backgroundColor="white";

    ith.ea().style.border="1px solid rgba(0, 0, 0, 0.63)";
    ith.en().style.border="1px solid rgba(0, 0, 0, 0.63)";
    ith.es().style.border="1px solid rgba(0, 0, 0, 0.63)";
    ith.eem().style.border="1px solid rgba(0, 0, 0, 0.63)";
    ith.ecomp().style.border="1px solid rgba(0, 0, 0, 0.63)";
    ith.ee().style.border="1px solid rgba(0, 0, 0, 0.63)";
    ith.et().style.border="1px solid rgba(0, 0, 0, 0.63)";
    ith.ec().style.border="1px solid rgba(0, 0, 0, 0.63)";

    ith.btes().style.display="none";
    ith.btec().style.display="block";
    ith.btecanc().style.display="block";
}

export const deleteContact = () => {
    ad.alertDelete();
}

export const favoriteContact = () => {
    ad.alertFavorite();
}

export const btConfirmarPerfil = () =>{
    ad.confirmEdit();
}

export const btCancelarPerfil = () => {
    ad.cancelEdit();
}

export const btCloseView = () => {
    ith.cvc().style.display="none";
    ith.contc().style.display="flex";
}

export const disableEdit = () => {
    ith.ea().disabled=true;
    ith.en().disabled=true;
    ith.es().disabled=true;
    ith.eem().disabled=true;
    ith.ecomp().disabled=true;
    ith.ee().disabled=true;
    ith.et().disabled=true;
    ith.ec().disabled=true;
}

export const hideEdit = () =>{
    ith.btec().style.display="none";
    ith.btecanc().style.display="none";
    ith.btes().style.display="block";

    ith.ea().style.backgroundColor="rgba(240, 248, 255, 0)";  
    ith.en().style.backgroundColor="rgba(240, 248, 255, 0)";
    ith.es().style.backgroundColor="rgba(240, 248, 255, 0)";
    ith.eem().style.backgroundColor="rgba(240, 248, 255, 0)";
    ith.ecomp().style.backgroundColor="rgba(240, 248, 255, 0)";
    ith.ee().style.backgroundColor="rgba(240, 248, 255, 0)";
    ith.et().style.backgroundColor="rgba(240, 248, 255, 0)";
    ith.ec().style.backgroundColor="rgba(240, 248, 255, 0)";

    ith.ea().style.border="none";
    ith.en().style.border="none";
    ith.es().style.border="none";
    ith.eem().style.border="none";
    ith.ecomp().style.border="none";
    ith.ee().style.border="none";
    ith.et().style.border="none";
    ith.ec().style.border="none";
}