// Javascript Document


import "./css/index-style.css";

import * as ith from './js/elementsHTML';
import * as app from './js/api';
import * as sm from './js/sideMenu';
import * as vc from './js/viewContact';
import { btConfirmarCadastro, btCancelarCadastro, cadastrarContato } from "./js/createContact";
import { alertClose } from "./js/alertsDiv";


app.getContact().then(() => {
    ith.cl().style.display="none";
    ith.cl().style.zIndex="0";
    sm.btContato();
});



    // FUNÇÕES BOTÕES

// Botões Side Menu

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

ith.edc().onclick = () => {
    vc.editContact();
}

ith.delc().onclick = () => {
    vc.deleteContact();
}

ith.favc().onclick = () => {
    vc.favoriteContact();
}

ith.btes().onclick = () => {
    alertClose();
}

ith.btec().onclick = () => {
    vc.btConfirmarPerfil();
}

ith.btecanc().onclick = () => {
    vc.btCancelarPerfil();
}

// Botões Cadastro Contato

ith.cadc().onclick = () => {
    cadastrarContato();
}

ith.confc().onclick = () => {
    btConfirmarCadastro();
}

ith.cancc().onclick = () => {
    btCancelarCadastro();
}