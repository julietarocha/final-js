let prodServicios = [
    {id: 1, numero: 1, nombre: "diseño web", desc: "Creamos el diseño idea para tu pagina", precio: 40000},
    {id: 2, numero: 2, nombre: "multimedia", desc: "Pensamos el mejor contenido multimedia para tu pagina", precio: 20500},
    {id: 3, numero: 3, nombre: "javascript", desc: "Expertxs en darle magia a tu pagina", precio: 30700}
]

let serviceProd = document.getElementById("checklist-servicios");
/*
function mostrarServicio(){
    prodServicios.forEach(item =>{
        let div = document.createElement(`div`)
        div.className = `service`
        div.innerHTML = `<div class="service">
                            <h3 class="n-service" id="service1">
                            <span class="number">${item.numero}</span>${item.nombre}</h3>
                            <p>${item.desc}</p>
                            <p>$${item.precio}</p>
                        </div>`

        serviceProd.appendChild(div)
    })
}
*/

function mostrarCarrito(){
    let div = document.createElement(`div`)
    div.className = `productoEnCarrito`
    div.innerHTML = <div class="carrito">
                        <p>Diseño Web</p>
                        <p>Precio: $40000</p>
                        <button class="boton-eliminar"></button>
                    </div>
}


