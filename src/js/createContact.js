// Javascript Document


import * as ith from './elementsHTML';
import * as dtc from './dataContacts';
import * as sm from './sideMenu';
import { createContact } from './api';
import { alertCreateContact, alertCreateContactSucess } from './alertsDiv';


export let cadastrarContato = () => {
    ith.cc().style.display="flex";
    ith.contc().style.display="none";
}

let verifFieldsCad = () => {
    if(ith.ino().value.length>=3 && ith.is().value.length>=3 && verifEmail(ith.ie().value) && (ith.im().checked==true || ith.ife().checked==true) && ith.ic().value.length>=3){
        return true;
    }
    return false;
}

let verifEmail = (email) =>{

    let te = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return te.test(email);
}

export let btConfirmarCadastro = () => {
    let auxg;

    if(verifFieldsCad()){

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
        
        alertCreateContactSucess();
        sm.btContato();
        window.location.reload();
    
    }else{
        alertCreateContact();
    }
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