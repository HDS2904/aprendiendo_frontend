// Exportaciónes al declarar

export let lisNumber = [1,2,3,4,5,6,7,8,9]

export const USER_NAME = 'Jonathan.HDS'

export function getHello() {
    console.log("Hola mundo");
}

export class User {
    constructor(name){
        this.name = name;
    }
}

// Exportación separada de la declaración