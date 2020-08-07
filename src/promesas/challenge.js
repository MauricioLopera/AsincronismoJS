const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';
let cantidad;

fetchData(API)
    .then(data => {
        cantidad = data.info.count;
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(err => console.log(err));
