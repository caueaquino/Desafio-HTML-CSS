// Javascript Document


let y=0;

let btMenu = () => {
    if(y==0){
        cSide().style.display="flex";
        btm().style.left="270px";
        y=1;
    }else{
        cSide().style.display="none";
        btm().style.left="10px";
        y=0;
    }
}

let btContato = () => {
    resetbts();
    ac().style.backgroundColor="rgb(35, 68, 255)";
    ac().style.boxShadow="2px 0px 10px rgb(10, 10, 10)";
    lic().style.zIndex="3";
    nc().style.display="none";
    xcf=0;

    renderContacts(xcf);
}

let btFavorito = () => {
    resetbts();
    af().style.backgroundColor="rgb(35, 68, 255)";
    af().style.boxShadow="2px 0px 10px rgb(10, 10, 10)";
    lif().style.zIndex="3";
    nf().style.display="none";
    xcf=1;

    renderContacts(xcf);
}

let resetbts = () => {
    ac().style.backgroundColor="rgba(10, 10, 10, 0)";
    ac().style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0)";
    lic().style.zIndex="2";
    af().style.backgroundColor="rgba(10, 10, 10, 0)";
    af().style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0)";
    lif().style.zIndex="2";
    nc().style.display="none";
    nf().style.display="none";
}