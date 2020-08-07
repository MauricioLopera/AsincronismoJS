let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//funcion que hace las peticiones a la API con ECS6
const fetchData = (url_api) =>{
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        //hacemos el llamado
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error: ' + url_api))

            }
        });
        xhttp.send();
    });
}

module.exports = fetchData;