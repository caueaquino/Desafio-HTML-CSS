// Javascript Document



export let auxGetAll=false;

export const setAuxGetAll = (vari) => {
    auxGetAll=vari;
}



export let contatos=[];

export const setContatos = (conts) => {
    contatos=conts;
}

export const pushContatos = (cont) => {
    contatos.push(cont);
}



export let favoritos=[];

export const setFavoritos = (fav) => {
    favoritos=fav;
}

export const pushFavoritos = (fav) => {
    favoritos.push(fav);
}

export const changeFavorites = (cont, i) => {
    favoritos[i]=cont;
}

export const removeFavorite = (i) => {
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

export const setContato = (cont) => {
    contato=cont;
}

export const setFavoriteContact = (op) => {
    contato.isFavorite=op;
}

export const changeContato = (cont, i) => {
    contato[i]=cont;
}

export const removeContato = (i) => {
    contatos.splice(i, 1);
}

export const constContato = (ft, ln, e, g, iav, ic, iad, ip, ico, ifa, id) => {
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

export const setChangeFavorite = (cf) => {
    changeFavorite=cf;
}



export let pcontact;

export const setPContact = (pc) => {
    pcontact=pc;    
}



export let xcf=0;

export const setxcf = (x) => {
    xcf=x;
}



export let pag=0;

export const setPag = (pg) => {
    pag=pg;
}



export let qtdPag=0;

export const setQtdPag = (x) => {
    qtdPag=x;
}