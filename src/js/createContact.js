// Javascript Document


import * as ith from './elementsHTML';
import * as dtc from './dataContacts';
import * as sm from './sideMenu';
import { createContact } from './api';


export let cadastrarContato = () => {
    ith.cc().style.display="flex";
    ith.contc().style.display="none";
}

export let btConfirmarCadastro = () => {
    let auxg;

    if(ith.im().checked==true){
        auxg="m";
    }else if(ith.ife().checked==true){
        auxg="f";
    }else{
        auxg="";
    }

    dtc.constContato(ith.ino().value, ith.is().value, ith.ie().value, auxg, ith.ia().value, ith.ic().value, ith.iend().value, ith.it().value, ith.icoment().value, ith.iis().checked, "");

    if(createContact()){

        dtc.pushContatos(dtc.contato);

        if(dtc.contato.isFavorite==true){
            dtc.pushFavoritos(dtc.contato);
            limpaTelaCadastro();
        }
    }
    
    sm.btContato();
}

 export let btCancelarCadastro = () => {
    limpaTelaCadastro();
}

let limpaTelaCadastro = () => {
    ith.ino().value="";
    ith.is().value="";
    ith.ie().value="";
    ith.im().checked=false;
    ith.ife().checked=false;
    ith.ia().value="";
    ith.ic().value="";
    ith.iend().value="";
    ith.it().value="";
    ith.icoment().value="";
    ith.iis().checked=false;
    ith.cc().style.display="none";
    ith.contc().style.display="flex";
}