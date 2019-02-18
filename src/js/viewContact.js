// Javascript Document


let contactView = (aux) => {
    pcontact=aux;

    contato=contatos[aux];

    ea().value=contatos[aux].info.avatar;
    en().value=contatos[aux].firstName;
    es().value=contatos[aux].lastName;
    eem().value=contatos[aux].email;
    ecomp().value=contatos[aux].info.company;
    ee().value=contatos[aux].info.address;
    et().value=contatos[aux].info.phone;
    ec().value=contatos[aux].info.comments;

    ipf().innerHTML="<h2 id='ipf'>Perfil Contato</h2>";

    if(contatos[aux].isFavorite==true){
        ipf().innerHTML='<h2 id="ipf"><img alt="favorito" src="./img/favorit-icon.png" height="30px" width="30px">Perfil Contato</h2>';
    }

    cvc().style.display="flex";
}

let editContact = () => {
    ea().disabled=false;
    en().disabled=false;
    es().disabled=false;
    eem().disabled=false;
    ecomp().disabled=false;
    ee().disabled=false;
    et().disabled=false;
    ec().disabled=false;

    ea().style.backgroundColor="white";
    en().style.backgroundColor="white";
    es().style.backgroundColor="white";
    eem().style.backgroundColor="white";
    ecomp().style.backgroundColor="white";
    ee().style.backgroundColor="white";
    et().style.backgroundColor="white";
    ec().style.backgroundColor="white";

    ea().style.border="1px solid rgba(0, 0, 0, 0.63)";
    en().style.border="1px solid rgba(0, 0, 0, 0.63)";
    es().style.border="1px solid rgba(0, 0, 0, 0.63)";
    eem().style.border="1px solid rgba(0, 0, 0, 0.63)";
    ecomp().style.border="1px solid rgba(0, 0, 0, 0.63)";
    ee().style.border="1px solid rgba(0, 0, 0, 0.63)";
    et().style.border="1px solid rgba(0, 0, 0, 0.63)";
    ec().style.border="1px solid rgba(0, 0, 0, 0.63)";

    btes().style.display="none";
    btec().style.display="block";
    btecanc().style.display="block";
}

let deleteContact = () => {
    alertDelete();
}

let favoriteContact = () => {
    alertFavorite();
}

let btConfirmarPerfil = () =>{
    confirmEdit();
    disableEdit();
    hideEdit();
}

let btCancelarPerfil = () => {
    cancelEdit();
}

let btCloseView = () => {
    cvc().style.display="none";
}

let disableEdit = () => {
    ea().disabled=true;
    en().disabled=true;
    es().disabled=true;
    eem().disabled=true;
    ecomp().disabled=true;
    ee().disabled=true;
    et().disabled=true;
    ec().disabled=true;
}

let hideEdit = () =>{
    btec().style.display="none";
    btecanc().style.display="none";
    btes().style.display="block";

    ea().style.backgroundColor="rgba(240, 248, 255, 0)";  
    en().style.backgroundColor="rgba(240, 248, 255, 0)";
    es().style.backgroundColor="rgba(240, 248, 255, 0)";
    eem().style.backgroundColor="rgba(240, 248, 255, 0)";
    ecomp().style.backgroundColor="rgba(240, 248, 255, 0)";
    ee().style.backgroundColor="rgba(240, 248, 255, 0)";
    et().style.backgroundColor="rgba(240, 248, 255, 0)";
    ec().style.backgroundColor="rgba(240, 248, 255, 0)";

    ea().style.border="none";
    en().style.border="none";
    es().style.border="none";
    eem().style.border="none";
    ecomp().style.border="none";
    ee().style.border="none";
    et().style.border="none";
    ec().style.border="none";
}