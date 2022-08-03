let carritoCompras = []

let contenedorProductos = document.getElementById('contenedor-productos');


function mostrarProductos() {
    stockProductos.forEach(item => {
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = ` 
                            <div class="card">
                                <img src="${item.img}" class="card-img-top" alt="lab1-nude">
                                <div class="card-body">
                                    <h5 class="card-title">${item.nombre}</h5>
                                    <p class="card-text">${item.desc}</p>
                                    <p class="precio">$${item.precio}</p>
                                    <a href="#" class="btn btn-primary">Agregar al carrito</a>
                                </div>
                            </div>  
                        `
        contenedorProductos.appendChild(div)
    })
}








