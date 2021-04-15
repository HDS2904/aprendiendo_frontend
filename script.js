    // NUEVAS CARACTERISTICAS IMPLEMENTADAS EN ECMAScript 6

    // 1. Uso del tipo de dato simbolo
    var simbolo = Symbol('res')

    // 2. Variabbles y constantes
    const URI = 'http://...'
    let variable = 15


    // 3. destructuración
        //Para arrays
        let array = [ 1,2,3,4,5]
        let [ a, ...b ] = array
        // Para objetos
        let persona = {
            name: 'jose',
            age: 18,
            sex: 'masculino'
        }
        let { name, edad, sexo} = persona

    // 4. Mapear y establecer
    let mapa = new map([['name','jose'],['age',18], ['sex','masculino']])
    mapa.set('email','jose@gmail.com')
    mapa.get('email')
    mapa.delete('sex')
    mapa.has('age')

    let asig = new set([1,2,3,4,5,6])
    let array = Array.from(asig)

    // 5. caracteristicas nuevas de objetos
    let marca = 'asus'
    let costo = 1500
    let pc = {
        marca,
        pc,
    }
    let copiaPc = { ...pc }
    let objeto = {
        dato1: 11,
        dato2: 12,
    }
    objeto.assign({dato3:13},objeto)


    // 6. Nuevo metodo cadena
    let cadena = "hola mundo"
    cadena.includes('mundo')    // verifica si mundo esta en la cadena
    cadena.startsWith('hola')   //verifica si la cadena inicia con hola
    cadena.endsWith('do')   //verifica si la cadena termina con do
    cadena.repeat(2)    // muestra la cadena repetida tantas veces
    cadena.padEnd(5,'y') //completa con 'y' en la posicion 5 de la cadena
    cadena.padStart(5,'y') 

    // 7. Valor predifinido de parametros
    function suma ( a, b) {
        return a+b;
    }

    suma()
    suma(5)
    suma(5,6)

    // 8. Función de flecha
    let funArrow = ( a, b ) => {
        return a+b
    }
    let funArrow2 = () => {
        console.log('función flecha');
    };
    let funArrow3 = () => console.log('hola');
    let objeto2 = {
        fun: () => {
            console.log('función fecha dentro de un objeto');
        },
        fun2: () => console.log('otra xD')
    }

    // 9. Clases
    class Developer {
        
        constructor(nombre, edad) {
            this.name = nombre,
            this.age = edad
        }

        setName(change) {
            this.name = change;
        }

        getName() {
            return this.name;
        }

        setAge(change) {
            this.Age = change;
        }

        getAge() {
            return this.Age;
        }

        toString() {
            console.log(`Desarrollados: ${this.name} con ${this.age} de edad`);
        }

    }

    let developer = new developer('Jonathan',35)