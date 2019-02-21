// Javascript Document


import * as dtc from './dataContacts';  

export const getContact = async () => {

    const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts');
    const data = await res.json();

    await dtc.setContatos(data);
    
    for(let i=0;i<dtc.contatos.length;i++){
        if(dtc.contatos[i].isFavorite==true){
            dtc.pushFavoritos(dtc.contatos[i]);
        }
    }
    localStorage.clear();
    localStorage['favorits']=JSON.stringify(dtc.favoritos);

    dtc.setAuxGetAll(true);
}

export let createContact = async () => {
    
    let cont = ({
        "firstName": dtc.contato.firstName,
        "lastName": dtc.contato.lastName,
        "email": dtc.contato.email,
        "gender": dtc.contato.gender,
        "isFavorite": dtc.contato.isFavorite,
        "company": dtc.contato.info.company,
        "avatar": dtc.contato.info.avatar,
        "address": dtc.contato.info.address,
        "phone": dtc.contato.info.phone,
        "comments": dtc.contato.info.comments
      });

    try{
        const res =  await fetch('http://contacts-api.azurewebsites.net/api/contacts',
            {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(cont)
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
    
    let cont = ({
        "firstName": dtc.contato.firstName,
        "lastName": dtc.contato.lastName,
        "email": dtc.contato.email,
        "gender": dtc.contato.gender,
        "isFavorite": dtc.contato.isFavorite,
        "company": dtc.contato.info.company,
        "avatar": dtc.contato.info.avatar,
        "address": dtc.contato.info.address,
        "phone": dtc.contato.info.phone,
        "comments": dtc.contato.info.comments
      });

    try{
        const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts/'+id,
            {
                method: 'PUT',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(cont)
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