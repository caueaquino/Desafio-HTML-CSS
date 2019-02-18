// Javascript Document


const getContact = async () => {
    const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts');
    const data = await res.json();

    contatos=data;
    
    for(i=0;i<contatos.length;i++){
        if(contatos[i].isFavorite==true){
            favoritos.push(contatos[i]);
        }
    }
}

getContact().then(() => {
    cl().style.display="none";
    cl().style.zIndex="0";
    btContato();
});

let createContact = async () => {
    const res =  await POST('http://contacts-api.azurewebsites.net/api/contacts');

    if(res==200){
        console.log('Contato cadastrado com sucesso!');
    }else{
        console.log('Erro ao cadastrar contato!')
    }
}

let updateContact = async (id) => {
    const res = await PUT('http://contacts-api.azurewebsites.net/api/contacts/'+id);

    if(res==200){
        console.log("Contato atualizado com sucesso!")
    }else{
        console.log("Erro ao atualizar contato!");
    }
}

let removeContact = async (id) => {
    const res = await DELETE('http://contacts-api.azurewebsites.net/api/contacts/'+id);

    if(res==200){
        console.log("Contato cadastrado com sucesso!")
    }else{
        console.log("Erro ao remover contato!");
    }
}