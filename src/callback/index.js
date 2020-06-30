function suma(valor1, valor2){
    return valor1 + valor2;
}

//creamos el callback
function calcular (val1,val2,callback){
    return callback(val1,val2);
}

console.log(calcular(2,3,suma));

//ejemplo 2
function fecha(callback){
    console.log(new Date);
    setTimeout(()=>{
        let nuevaFecha = new Date;
        callback(nuevaFecha);
    }, 3000)
}

function imprimeFecha(hoy){
    console.log(hoy);
}

fecha(imprimeFecha);