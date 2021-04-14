// Codigo Java script para alterar el valor de la variable css de acuerdo al tamaño de ancho del scrollbar

const tam = () => innerWidth - document.documentElement.clientWidth

document.documentElement.style.setProperty('--scroll-bar',tam())