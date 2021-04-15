// window.getComputedStyle()   => Permite leer los estilos de un elemento

// element.style es una propiedad que sirve solo para escribir

// Agregar solo 1 estilo a un elemento

// document.body.style.backgroundColor = 'red';
// document.body.style.padding = '10px';


// Agregar mas de un estilo a un elemento

    // Forma 1
    document.body.classList.add('red')

    // Forma 2
    const size = 2
    const color = 'yellow'
    const  styles = `
        background: ${color};
        font-size: ${size}em;
        margin: 10px 30px;
    `
    // aplicación de estilos sobrescribiendo los estilos inline
    document.getElementById('sec-1').setAttribute('style',styles);
    
    // aplicación de estilos agregando los estilos inline
    document.getElementById('pa-1').style += `;${styles}`