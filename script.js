// SCOPE
    // Variables
    let varGlobal = 'variable global'

    function prueba() {
        let varLocal = 'dentro de función prueba'
        console.log(varLocal);
        console.log(varGlobal);
    }
    prueba()
    // console.log(varLocal);  //Error al no estar definida la variable globalmente
    console.log(varGlobal);


    //HOISTING
        // Variables inicializadas y posteriormente decalradas
        x = 'hola'
        console.log(x);
        var x
 
        y = 'mundo'
        console.log(y);
        // let y  //Error enminente

        z = 'experto'
        console.log(z);
        // const z

        // Modo de evitar errores
        let a1 = 1
        const a2 = 15
        console.log(`m = ${a1} y n = ${a2}`);
        

        var m = 12
        console.log(`m = ${m} y n = ${n}`);
        var n = 6
       
        var f = 12
        var g
        console.log(`m = ${f} y n = ${g}`);
        g = 15