
let carritoDeCompras = []

let contenedorProductos = document.getElementById('contenedor-productos')
/*
let contenedorCarrito = document.getElementById('contenedor-carrito');
let agregarAlCarrito = document.getElementById('producto');

*/
function mostrarProductos() {
    stockProductos.forEach(item => {
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = ` <div class="card">
                            <img src="${item.img}" class="card-img-top" alt="lab1-nude">
                            <div class="card-body">
                                <h5 class="card-title">${item.nombre}</h5>
                                <p class="card-text">${item.desc}</p>
                                <p class="precio">$${item.precio}</p>
                                <a href="#" class="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>`
        contenedorProductos.appendChild(div)
    })
    agregarAlCarrito()
}

function agregarAlCarrito(){
    let productoAgregar = prompt("¿Que producto quiere agregar?").toLowerCase()
    let encontrado = stockProductos.find(element => element.nombre.toLowerCase() == productoAgregar)
    carritoDeCompras.push(encontrado)
    mostrarCarrito(encontrado)
}

function mostrarCarrito(encontrado){
    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML = `   <p>${encontrado.nombre}</p>
                        <p>Precio: $${encontrado.precio}</p>
                        <button class="boton-eliminar"><i class="bx bx-trash"></i></button>
                    `
    contenedorCarrito.appendChild(div)
}







