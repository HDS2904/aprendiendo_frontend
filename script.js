
//COMPARACION DE ASYNC Y UN PROMISE

/*  //async
let getNombre = async() => {
    return 'Jonathan Canales Chavez'
}*/

/*  //promise
let getNombre = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Jonathan Canales')
        },3000 )    //tiempo de espera en respuesta con el setTimeout
    })
}

/* //Llamada de la funcion getNombre
getNombre().then( nombre => {
    console.log(nombre)
}).catch( e => {
    console.log('error de async')
})*/


//APLICANDO ASYNC - AWAIT

let getNombre = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Jonathan Canales')
        },3000 )    //tiempo de espera en respuesta con el setTimeout
    })
}


let mostrarNombre = async () => {
    let name = await getNombre()
    return `Su nombre es: ${name}`
}

mostrarNombre().then( mensaje => {
    console.log(mensaje)
} )
