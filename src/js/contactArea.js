// Javascript Document


import * as ith from './elementsHTML';
import * as dtc from './dataContacts';
import { contactView, favoriteView } from './viewContact';


const favicon = require('../img/favorit-icon.png');
const viewicon = require('../img/icon-view.png');


export const renderContacts = (opt) => {

    let aux;

    if(opt==0){
        ith.h2t().innerText="Contatos";
        aux=dtc.contatos;

        dtc.setQtdPag(dtc.contatos.length/10);
        
        if(dtc.contatos.length%10!=0){
            const auxqtdpag=dtc.qtdPag+1;

            dtc.setQtdPag(auxqtdpag);
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

        ith.cf().innerHTML='<h2 id="not-contacts">Não Há Contatos Cadastrados !</h2>'+
                        '<h2 id="not-favorits">Não Há Contatos Favoritos !</h2>';

        const auxpag=(dtc.pag*10);

        for(let i=auxpag;i<auxpag+10 && i<aux.length;i++){

            let fav="";

            if(aux[i].isFavorite==true){
                fav="<img class='fimg' src='"+favicon+"' alt='Favorito' height='30px' width='30px'>";
            }

            const d=document.createElement("div");

            d.className="contact-data";

            d.innerHTML='<img src="'+aux[i].info.avatar+'" height="230px" width="230px">'+
                            '<label class="lcontact">Contato:</label>'+fav+'<label>'+aux[i].firstName+'&nbsp'+aux[i].lastName+'</label>'+
                                
                            '<div class="internal-view">'+
                                '<button id="bt'+i+'" class="btperfil">Visualizar'+
                                    '<img src="'+viewicon+'" alt="Icone-Visualizar" height="30px" width="30px">'+
                                '</button>'+
                            '</div>';

            ith.cf().appendChild(d);  
            
            if(aux[i].isFavorite==false){
                d.onclick = () => {
                    contactView(i);
                }
            }else{
                d.onclick = () => {
                    favoriteView(i);
                }
            }
        }

        ith.pg().innerHTML='';
        
        let auxpg;
        
        if(dtc.pag<3){
            auxpg=0;

        }else{
            auxpg=dtc.pag-2;
        }

        for(let i=auxpg; i<auxpg+5 && i<dtc.qtdPag-1; i++){

            const b=document.createElement("button");
            
            if(i==dtc.pag){
                b.style.backgroundColor="rgb(150, 150, 150)";
            }

            b.textContent=i+1;

            b.onclick = () => {
                dtc.setPag(i);
                renderContacts(opt);
            }

            ith.pg().appendChild(b);
        }
    
    }else{

        ith.pg().innerHTML='';

        ith.cf().innerHTML='<h2 id="not-contacts">Não Há Contatos Cadastrados !</h2>'+
                            '<h2 id="not-favorits">Não Há Contatos Favoritos !</h2>';

        if(opt==0){
            ith.nc().style.display="block";
        }else{
            ith.nf().style.display="block";
        }
    }
}