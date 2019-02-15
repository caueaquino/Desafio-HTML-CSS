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

let removeContact = async (id) => {
    const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts/'+id);
    const data= await res.json();

    console.log(data);
}