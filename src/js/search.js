// Javascript Document


import * as ith from './elementsHTML';
import * as dtc from './dataContacts';
import { contactView } from './viewContact';


export const searchKey = () => {
    
    ith.dtl().style.display='block';
    ith.bp().style.marginBottom='0';

    ith.dtl().innerHTML='';

    const name=(ith.bp().value).toLowerCase();
    
    let searchContacts=[];
    
    searchContacts=dtc.contatos.filter(c => new RegExp(name, 'ig').test(`${c.firstName} ${c.lastName}`.toLowerCase()));

    for(let i=0; i<searchContacts.length; i++){

        const bt=document.createElement('button');
                
        bt.innerHTML="<img src='"+searchContacts[i].info.avatar+"' width='60px' height='60px'>"+searchContacts[i].firstName+" "+searchContacts[i].lastName;

        bt.onclick = () => {
            contactView(i);
        }

        ith.dtl().appendChild(bt);
    }
}


export const searchOut = () => {
    setTimeout(function(){
        setSearchOut();
    }, 200);
}


const setSearchOut = () => {
    ith.dtl().style.display='none';
    ith.bp().style.marginBottom='40px';

    ith.dtl().innerHTML='';
}