// Javascript Document


let cadastrarContato = () => {
    cc().style.display="flex";
}

let btConfirmarCadastro = () => {
    contato.firstName=ino().value;
    contato.lastName=is().value;
    contato.email=ie().value;
    if(im().checked==true){
        contato.gender="m";
    }else if(ife().checked==true){
        contato.gender="f";
    }else{
        contato.gender="";
    }
    contato.info.avatar=ia().value;
    contato.info.company=ic().value;
    contato.info.adress=iend().value;
    contato.info.phone=it().value;
    contato.info.comments=icoment().value;
    contato.isFavorite=iis().checked;
    
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
    ino().value="";
    is().value="";
    ie().value="";
    im().checked=false;
    ife().checked=false;
    ia().value="";
    ic().value="";
    iend().value="";
    it().value="";
    icoment().value="";
    iis().checked=false;
    cc().style.display="none";
}