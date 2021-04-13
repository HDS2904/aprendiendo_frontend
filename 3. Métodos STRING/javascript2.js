// ARRAY
let cadena = "Hola mundo"

// METODOS DE UN STRING

    // Permite obtener el numero de caracteres
    cadena.length

    // Permite quitar los espacios en blanco
    cadena.trim()

    // Combierte todo el texto en mayusculas
    cadena.toUpperCase()

    // Combierte todo el texto en minusculas
    cadena.toLowerCase()

    // Retorna la posición del caracter o palabra buscada
    cadena.indexOf("mu")

    // Retorna la posición del caracter o palabra buscada iniciando la busqueda desde el final
    cadena.lastIndexOf("mu")

    // retorna V si esta el caracter o palabra buscada, de lo contrario F
    cadena.includes("mu")

    // verifica si la cadena comienza con el texto enviado
    cadena.startsWith("ho")

    // verifica si la cadena termina con el texto enviado
    cadena.endsWith("do")

    // reemplaza el elemento 
    cadena.replace("hola", "gran")

    // lista los elementos de la cadena segun el termino de separación
    cadena.split(" ")

    // extrae caracteres desde el inicio indicado
    cadena.substr(1,5)
