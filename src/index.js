// Javascript Document


import "./css/index-style.css";

import * as ith from './js/elementsHTML';
import * as app from './js/api';
import * as sm from './js/sideMenu';
import * as vc from './js/viewContact';
import { btConfirmarCadastro, btCancelarCadastro } from "./js/createContact";
import { alertClose, closeAlert, saveChanges, yesCancelEdit, noCancelEdit, contactDelete } from "./js/alertsDiv";


app.getContact().then(() => {
    ith.cl().style.display="none";
    ith.cl().style.zIndex="0";
    sm.btContato();
});

// Funcões Botões

// Botões Menu

ith.btm().onclick = () => {
    sm.btMenu();
}

ith.ac().onclick = () => {
    sm.btContato();
}

ith.af().onclick = () => {
    sm.btFavorito();
}

// Botão visualizar/editar perfil Contato

ith.btes().onclick = () => {
    alertClose();
}

ith.btec().onclick = () => {

}

ith.btecanc().onclick = () => {

}

// Botões alerta close perfil

ith.cey().onclick = () => {
    saveChanges();
}

ith.cen().onclick = () => {
    closeAlert();
    vc.btCloseView();
}

// Botões cancela e confirma edição contato

ith.yce().onclick = () => {
    yesCancelEdit();
}

ith.nce().onclick = () => {
    noCancelEdit();
}

// Botões cancela e confirma exclusao contato

ith.yd().onclick = () => {
    contactDelete();
}

ith.nd().onclick = () =>{
    closeAlert();
}

// Botões Cadastro Contato

ith.confc().onclick = () => {
    btConfirmarCadastro();
}

ith.cancc().onclick = () => {
    btCancelarCadastro();
}