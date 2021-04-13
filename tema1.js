// OBEJETOS
    // Declaración de objetos
    let laptop = {
        marca: "asus",
        procesador: "AMD",
        ram: "kingston",
        gpu: "nvidea",
    }


// Template string
const mensaje1 = `Una marca conocida es ${laptop.marca}`

const mensaje2 = `Mi laptop es de marca ${laptop.marca}, y sus especificaciones son: 
                CPU: ${laptop.procesador}, RAM: ${laptop.ram}, GPU: ${laptop.gpu}`
console.log(mensaje);


// Destructuring
    // Arreglos
    const arreglo = ['jose', 'maría', 'carlos', 'ruíz', 'estefany']
    const [ a, b, ...c ] = arreglo

    //Objetos
    const { nuevo_objeto } = laptop

    // Nota: la destructuración de objetos ayuda a eliminar la asignación por referencia
