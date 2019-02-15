// Javascript Document


let contactView = () => {
    ea().value="./img/user.png";
    en().value="caue";
    es().value="aquino nogueira";
    eem().value="caue@forlogic.net";
    ecomp().value="forlogic";
    ee().value="rua avenida cidade";
    et().value="11964984447";
    ec().value="algum comentario";
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

}

let favoriteContact = () => {

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