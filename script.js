// MAP AND FILTER
let array = [1,2,3,4,5,6,7,8,9]

    // Map: retorna un array con los elememtos tratados segun el operador
    let newArray = array.map( item => item * item )
    console.log(newArray);

    // Filter: retorna un arreglo con los elementos filtrados segun la condición
    let newArray2 = array.filter( item => item > 5 )
    console.log(newArray2);
    
    //Find: retorna el primer elemento que cumple la condición
    let newArray3 = array.find( item => item%3 == 0)
    console.log(newArray3);


    // NOTA: estos métodos retornan un nuevo array y no alteran el existente
    for( i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    let listObject = [
        { id: 1, name: 'Jonathan' },
        { id: 2, name: 'Carlos' },
        { id: 3, name: 'Jilio' },
        { id: 4, name: 'Steve' },
    ]
    for (const iterator of listObject) {
        console.log(iterator);
    }

    listObject.forEach(element => {
        console.log(element.name);
    });