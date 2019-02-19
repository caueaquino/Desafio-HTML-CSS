// Javascript Document


import * as ith from './elementsHTML';
import * as dtc from './dataContacts';


export let renderContacts = (opt) => {

    let aux;

    if(opt==0){
        ith.h2t().innerText="Contatos";
        aux=dtc.contatos;

        dtc.setQtdPag(dtc.contatos.length/10);
        
        if(dtc.contatos.length%10!=0){
            dtc.setQtdPag(dtc.qtdPag+1);
        }
    }else{
        ith.h2t().innerText="Favoritos";
        aux=dtc.favoritos;

        dtc.setQtdPag(dtc.favoritos.length/10);

        if(dtc.favoritos.length%10!=0){
            dtc.setQtdPag(dtc.qtdPag+1);
        }
    }


    if(aux.length>0){

        ith.cf().innerHTML='<div id="contacts-field">'+
                        '<h2 id="not-contacts">Não Há Contatos Cadastrados !</h2>'+
                        '<h2 id="not-favorits">Não Há Contatos Favoritos !</h2>'+
                    '</div>';

        for(let i=dtc.pag;i<dtc.pag+10;i++){

            let fav="";

            if(aux[i].isFavorite==true){
                fav="<img class='fimg' src='./img/favorit-icon.png' alt='Favorito' height='30px' width='30px'>";
            }

            let d=document.createElement("div");

            d.innerHTML='<div class="contact-data">'+
                            '<img src="'+aux[i].info.avatar+'" height="230px" width="230px">'+
                            '<label class="lcontact">Contato:</label>'+fav+'<label>'+aux[i].firstName+'&nbsp'+aux[i].lastName+'</label>'+
                                
                            '<div class="internal-view">'+
                                '<button class="btperfil" value="'+i+'">Visualizar'+
                                    '<img src="./img/icon-view.png" alt="Icone-Visualizar" height="30px" width="30px">'+
                                '</button>'+
                            '</div>'+
                        '</div>';

                        ith.cf().appendChild(d);  
        }

        ith.pg().innerHTML='<div id="pags">'+
                            ''+
                        '</div>';
    }else{

        ith.cf().innerHTML='<div id="contacts-field">'+
                            '<h2 id="not-contacts">Não Há Contatos Cadastrados !</h2>'+
                            '<h2 id="not-favorits">Não Há Contatos Favoritos !</h2>'+
                        '</div>';

        if(opt==0){
            ith.nc().style.display="block";
        }else{
            ith.nf().style.display="block";
        }
    }
}