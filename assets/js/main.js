const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

console.log(menu);
console.log(hamburger);

hamburger.addEventListener('click', () => {
    menu.classList.toggle("spread")
});

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != hamburger){
            menu.classList.toggle("spread")
    }
});

const imagenes = document.querySelectorAll('.img-galeria');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        alert("¿Te gusta esta imagen?")
    })
});


