// Javascript Document


let renderContacts = (opt) => {

    let aux;

    if(opt==0){
        h2t().innerText="Contatos";
        aux=contatos;
    }else{
        h2t().innerText="Favoritos";
        aux=favoritos;
    }


    if(aux.length>0){

        cf().innerHTML='<div id="contacts-field">'+
                        '<h2 id="not-contacts">Não Há Contatos Cadastrados !</h2>'+
                        '<h2 id="not-favorits">Não Há Contatos Favoritos !</h2>'+
                    '</div>';

        for(i=0;i<10 && i<aux.length;i++){

            let fav="";

            if(aux[i].isFavorite==true){
                fav="<img class='fimg' src='./img/favorit-icon.png' alt='Favorito' height='30px' width='30px'>";
            }

            let d=document.createElement("div");

            d.innerHTML='<div class="contact-data">'+
                            '<img src="'+aux[i].info.avatar+'" height="230px" width="230px">'+
                            '<label class="lcontact">Contato:</label>'+fav+'<label>'+aux[i].firstName+'&nbsp'+aux[i].lastName+'</label>'+
                                
                            '<div class="internal-view">'+
                                '<button onclick="contactView()">Visualizar'+
                                    '<img src="./img/icon-view.png" alt="Icone-Visualizar" height="30px" width="30px">'+
                                '</button>'+
                            '</div>'+
                        '</div>';

            cf().appendChild(d);  
        }
    }else{

        cf().innerHTML='<div id="contacts-field">'+
                            '<h2 id="not-contacts">Não Há Contatos Cadastrados !</h2>'+
                            '<h2 id="not-favorits">Não Há Contatos Favoritos !</h2>'+
                        '</div>';

        if(opt==0){
            nc().style.display="block";
        }else{
            nf().style.display="block";
        }
    }
}