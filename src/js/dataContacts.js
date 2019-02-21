// Javascript Document



export let auxGetAll=false;

export let setAuxGetAll = (vari) => {
    auxGetAll=vari;
}



export let contatos=[];

export let setContatos = (conts) => {
    contatos=conts;
}

export let pushContatos = (cont) => {
    contatos.push(cont);
}



export let favoritos=[];

export let setFavoritos = (fav) => {
    favoritos=fav;
}

export let pushFavoritos = (fav) => {
    favoritos.push(fav);
}

export let changeFavorites = (cont, i) => {
    favoritos[i]=cont;
}

export let removeFavorite = (i) => {
    favoritos.splice(i, 1);
}



export let contato={
    firstName: "",
    lastName: "",
    email: "", 
    gender: "",
    info: {
        avatar: "",
        company: "",
        address: "",
        phone: "",
        comments: ""
    },
    isFavorite: false,
    id: ""
};

export let setContato = (cont) => {
    contato=cont;
}

export let setFavoriteContact = (op) => {
    contato.isFavorite=op;
}

export let changeContato = (cont, i) => {
    contato[i]=cont;
}

export let removeContato = (i) => {
    contatos.splice(i, 1);
}

export let constContato = (ft, ln, e, g, iav, ic, iad, ip, ico, ifa, id) => {
    contato.firstName=ft;
    contato.lastName=ln;
    contato.email=e;
    contato.gender=g;
    contato.info.avatar=iav;
    contato.info.company=ic;
    contato.info.address=iad;
    contato.info.phone=ip;
    contato.info.comments=ico;
    contato.isFavorite=ifa;
    contato.id=id;
}



export let changeFavorite=0;

export let setChangeFavorite = (cf) => {
    changeFavorite=cf;
}



export let pcontact;

export let setPContact = (pc) => {
    pcontact=pc;    
}



export let xcf=0;

export let setxcf = (x) => {
    xcf=x;
}



export let pag=0;

export let setPag = (pg) => {
    pag=pg;
}



export let qtdPag=0;

export let setQtdPag = (x) => {
    qtdPag=x;
}