// Javascript Document


import {data} from './dataContacts';
import {itenshtml} from './elementsHTML';

const getContact = async () => {

    const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts');
    const data = await res.json();

    data.contatos=data;
    
    for(let i=0;i<contatos.length;i++){
        if(contatos[i].isFavorite==true){
            favoritos.push(contatos[i]);
        }
    }
}

getContact().then(() => {
    itenshtml.cl().style.display="none";
    itenshtml.cl().style.zIndex="0";
    btContato();
});

let createContact = async () => {
    
    try{
        const res =  await fetch('http://contacts-api.azurewebsites.net/api/contacts',
            {
                method: 'POST',
                headers: new Headers()
            }
        );
        if(res.status==200){
            console.log("Contato atualizado com sucesso!")
            return true;
        }
    
    }catch(err){
        console.error("Erro: "+err);
        return false;
    }
}

let updateContact = async (id) => {
    
    try{
        const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts/'+id,
            {
                method: 'PUT',
                headers: new Headers()
            } 
        );
        if(res.status==200){
            console.log("Contato atualizado com sucesso!")
            return true;
        }
    
    }catch(err){
        console.error("Erro: "+err);
        return false;
    }
}

let removeContact = async (id) => {

    try{
        const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts/'+id,
            {
                method: 'DELETE',
                headers: new Headers()
            } 
        );
        if(res.status==200){
            console.log("Contato removido com sucesso!")
            return true;
        }

    }catch(err){
        console.error("Erro: "+err);
        return false;
    }
}