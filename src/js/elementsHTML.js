// Javascript Document


export class itenshtml{
    // Div Area Carregamento

    cl(){
        return document.getElementById("container-loading");
    }

    // Div Alertas

    ealerts(){
        return document.getElementById("alerts");
    }

    ialert(){
        return document.getElementById("internal-alert");
    }

    // Side Menu Area

    cSide(){
        return document.getElementById("container-side");
    }

    btm(){
        return document.getElementById("btmenu");
    }

    ac(){
        return document.getElementById("acontatos");
    }

    af(){
        return document.getElementById('afavoritos');
    }

    lic(){
        return document.getElementById("licontatos");
    }

    lif(){
        return document.getElementById('lifavoritos');
    }


    // Contact Area

    h2t(){
        return document.getElementById("h2-type");
    }

    cf(){
        return document.getElementById("contacts-field");
    }

    nc(){
        return document.getElementById("not-contacts");
    }

    nf(){
        return document.getElementById("not-favorits");
    }


    // Create Contact Area

    cc(){
        return document.getElementById("container-cadastrar");
    }

    ino(){
        return document.getElementById("inome");
    }

    is(){
        return document.getElementById("isobrenome");
    }

    ie(){
        return document.getElementById('iemail');
    }

    im(){
        return document.getElementById("imasculino");
    }

    ife = ( ) => {
        return document.getElementById("ifeminino");
    }

    ia(){
        return document.getElementById("iavatar");
    }

    ic(){
        return document.getElementById("icompanhia");
    }

    iend(){
        return document.getElementById("iendereco");
    }

    it(){
        return document.getElementById("itelefone");
    }

    icoment(){
        return document.getElementById('icomentario');
    }

    iis(){
        return document.getElementById("iisfavorite");
    }

    // Area Paginação

    pg(){
        return document.getElementById("pags");
    }

    // View and Edit Contact Area

    ipf(){
        return document.getElementById("ipf");
    }

    ea(){
        return document.getElementById("eavatar");
    }

    en(){
        return document.getElementById("enome");
    }

    es(){
        return document.getElementById("esobrenome");
    }

    eem(){
        return document.getElementById("eemail");
    }

    ecomp(){
        return document.getElementById("ecompanhia");
    }

    ee(){
        return document.getElementById("eendereco");
    }

    et(){
        return document.getElementById("etelefone");
    }

    ec(){
        return document.getElementById("ecomentario");
    }

    cvc(){
        return document.getElementById("container-vcont");
    }

    btes(){
        return document.getElementById("btEditSair");
    }

    btec(){
        return document.getElementById("btEditConf");
    }

    btecanc(){
        return document.getElementById("btEditCanc");
    }
}