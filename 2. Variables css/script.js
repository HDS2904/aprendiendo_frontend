
// Leer variables css
console.log(getComputedStyle(document.documentElement).getPropertyValue('--tamano'));


// Modificar elementos
document.documentElement.style.setProperty('--tamano', '1em')