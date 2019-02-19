// Javascript Document


import * as dtc from './dataContacts';
import * as ith from './elementsHTML';
import * as cta from './contactArea';


let y=0;

 export let btMenu = () => {
    if(y==0){
        ith.cSide().style.display="flex";
        ith.btm().style.left="270px";
        y=1;
    }else{
        ith.cSide().style.display="none";
        ith.btm().style.left="10px";
        y=0;
    }
}

export let btContato = () => {
    resetbts();
    ith.ac().style.backgroundColor="rgb(35, 68, 255)";
    ith.ac().style.boxShadow="2px 0px 10px rgb(10, 10, 10)";
    ith.lic().style.zIndex="3";
    ith.nc().style.display="none";
    dtc.setxcf(0);

    cta.renderContacts(dtc.xcf);
}

export let btFavorito = () => {
    resetbts();
    ith.af().style.backgroundColor="rgb(35, 68, 255)";
    ith.af().style.boxShadow="2px 0px 10px rgb(10, 10, 10)";
    ith.lif().style.zIndex="3";
    ith.nf().style.display="none";
    dtc.setxcf(1);

    cta.renderContacts(dtc.xcf);
}

let resetbts = () => {
    ith.ac().style.backgroundColor="rgba(10, 10, 10, 0)";
    ith.ac().style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0)";
    ith.lic().style.zIndex="2";
    ith.af().style.backgroundColor="rgba(10, 10, 10, 0)";
    ith.af().style.boxShadow="-2px 0px 10px rgba(10, 10, 10, 0)";
    ith.lif().style.zIndex="2";
    ith.nc().style.display="none";
    ith.nf().style.display="none";
}