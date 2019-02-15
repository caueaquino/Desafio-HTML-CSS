import './index.css'
import { teste, outroTeste } from './teste'


window.state = {
    loading: true,
    filter: '',
    contacts: []
}

const getAll = async () => {
    const res = await fetch('http://contacts-api.azurewebsites.net/api/contacts')
    const data = await res.json();
    window.state = {
        ...window.state,
        contacts: data,
        loading: false
    }
}
const render = () => {
    const { contacts, filter, loading } = window.state;
    const contactsMatch = contacts.filter(c => new RegExp(filter).test(c.firstName));

    const container = document.getElementById('container');
  
    let html = '';

    for (const contact of contactsMatch) {
        html += `<div>${contact.firstName}</div>`;
    }
    if (loading) {
        html = '<h1>Loading</h1>';
    }

    container.innerHTML = html;
    
}
render();
getAll().then(() => {



    render();

    const search = document.getElementById('search');


    search.onkeyup = ({ target: { value }}) => {
        window.state = {
            ...window.state,
            filter: value
        }
        render();

    }
    var name = 't1';
    var img = require(`./_img/${name}.png`);


    console.log(img);
})

