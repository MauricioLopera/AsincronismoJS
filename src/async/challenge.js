const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try{
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const dimension = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(dimension.name);
    }catch(error){
        console.log(error);
    }
}

console.log('before');
anotherFunction(API);
console.log('after');