// Javascript Document


import * as dtc from './dataContacts';  

export const getContact = async () => {

    const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts');
    const data = await res.json();

    dtc.setContatos(data);
    
    for(let i=0;i<dtc.contatos.length;i++){
        if(dtc.contatos[i].isFavorite==true){
            dtc.favoritos.push(dtc.contatos[i]);
        }
    }
}

export let createContact = async () => {
    
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

export let updateContact = async (id) => {
    
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

export let removeContact = async (id) => {

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