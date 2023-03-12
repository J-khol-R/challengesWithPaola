let entrada = `8 7 5 2 3 9 1 6 4
9 7 4 5 6 1 3 2 8
7 4 9 6 5 3 2 8 1
9 7 4 3 2 5 8 1 6
3 7 1 6 5 4 9 8 2
4 2 9 6 8 1 7 3 5
3 5 7 2 9 4 1 6 8
1 3 7 9 4 8 5 6 2
5 7 9 4 2 6 8 1 3
3 8 1 6 5 4 2 9 7`

let datos = entrada.split('\n')

const juego = {
    posibilidades: ['123', '159', '147', '258', '369', '456', '357', '789'],
    veces_X: [0,0,0,0,0,0,0,0],
    veces_O: [0,0,0,0,0,0,0,0]
}

const resultado = {
    gana_x: 0,
    gana_o: 0,
    empate: 0
}



function ganador(arr){
    turno_x = false
    for (let i = 0; i < arr.length; i++) {  
        juego.veces_X = [0,0,0,0,0,0,0,0]
        juego.veces_O = [0,0,0,0,0,0,0,0]
        romper: for (let j = 0; j < arr[i].length; j+=2) {

            turno_x = !turno_x

            for (let z = 0; z < juego.posibilidades.length; z++) {
                
                if (turno_x) {
                    
                    if (juego.posibilidades[z].includes(arr[i].charAt(j))) {
                        juego.veces_X[z] += 1
        
                        if (juego.veces_X.includes(3)) {
                            resultado.gana_x += 1
                            break romper;
                        }
                        
                    }
                }else{
                    
                    if (juego.posibilidades[z].includes(arr[i].charAt(j))) {
                        juego.veces_O[z] += 1
                        
                        if (juego.veces_O.includes(3)) {
                            resultado.gana_o += 1
                            break romper;
                        }
        
                    }
                }

            }
        }
        
    }

    resultado.empate = (arr.length) - (resultado.gana_x + resultado.gana_o) 
    
}

ganador(datos)
console.log(resultado);