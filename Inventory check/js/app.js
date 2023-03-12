
import {texto} from "./texto.js";

const producto = {
    numeroUnico: [],
    cantidad: [],
    nombre: []
}

const productos_sum = {
    cantidad: [],
    nombre: []
}

function crear_obj(txt){
    let fila = txt.split('\n');
    let info = [];

    for (let i = 0; i < fila.length; i++) {
        info.push(fila[i].split(' '));
        info[i][1] = parseInt(info[i][1]);
        producto.numeroUnico.push(info[i][0])
        producto.cantidad.push(info[i][1])
        producto.nombre.push(info[i][2])
    }

}

function sumar_datos(){
    for (let i = 0; i < producto.numeroUnico.length; i++) {
        if (productos_sum.nombre.includes(producto.nombre[i])) {
            let indice = productos_sum.nombre.indexOf(producto.nombre[i]);
            productos_sum.cantidad[indice] = productos_sum.cantidad[indice] + producto.cantidad[i];
        }else{
            productos_sum.nombre.push(producto.nombre[i]);
            productos_sum.cantidad.push(producto.cantidad[i]);
        }
        
    }

}


function porcentaje(){
    let arr = productos_sum.cantidad;
    let porcen = [];
    for (let i = 0; i < arr.length; i++){
        porcen[i] = arr[i] % 100;
      }

    return porcen;
}


function multiplicar_product(){
    sumar_datos();
    let arr = porcentaje();
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
        total *= arr[i]
    }

    return total;

}







crear_obj(texto);
console.log(multiplicar_product());




