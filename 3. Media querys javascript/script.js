
// Media query en javascript (no usar if)
addEventListener('resize', () => {
    const tamano = matchMedia('(min-width: 800px)')
    if( tamano.matches ){
        document.body.style.backgroundColor = 'green'
    }else {
        document.body.style.backgroundColor = 'orange'
    }
})

addEventListener('DOMContentLoaded', () => {
    const tamano = matchMedia('(min-width: 800px)')
    if( tamano.matches ){
        document.body.style.backgroundColor = 'green'
    }else {
        document.body.style.backgroundColor = 'orange'
    }
})


const tamano = matchMedia('(min-width: 800px)')
const changeColor = m => {
    m.matches 
        ? document.getElementById('sec-1').style.fontSize = '2em'
        : document.getElementById('sec-1').style.fontSize = '10em'
}

changeColor(tamano)
tamano.addEventListener('change', changeColor)