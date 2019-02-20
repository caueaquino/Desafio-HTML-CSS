// Javascript Document


import * as ith from './elementsHTML';
import * as dtc from './dataContacts';
import { contactView } from './viewContact';


export const searchKey = () => {
    
    ith.dtl().style.display='block';
    ith.bp().style.marginBottom='0';

    ith.dtl().innerHTML='';


    
    for(let i=0; i<dtc.contatos.length; i++){

        let bt=document.createElement('button');

        bt.innerText=dtc.contatos[i].firstName+" "+dtc.contatos.lastName;

        bt.onclick = () => {
            contactView(i);
        }

        ith.dtl().appendChild(bt);
    }
}

export const searchOut = () => {
    ith.dtl().style.display='none';
    ith.bp().style.marginBottom='40px';

    ith.dtl().innerHTML='';
}