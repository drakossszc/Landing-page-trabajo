const productos = [
    { id: 1, titulo: "Cocina Intermedia", precio: "15.000", icono: "🍲" },
    { id: 2, titulo: "Calistenia Básica", precio: "20.000", icono: "💪" },
    { id: 3, titulo: "Código Limpio", precio: "25.000", icono: "💻" },
    {id: 4, titulo: "Pasteleria Básica", precio:"35.000", icono: "🍰"},
    {id: 5, titulo: "Calistenia Intermedia", precio:"48.000", icono: "⚡"},
    {id: 6, titulo: "Cocina Básica", precio:"19.000", icono: "🍽️"},
    {id: 7, titulo: "Calistenia Avanzada", precio:"50.000", icono: "🏋️‍♀️"},
    {id: 8, titulo: "Cocina Avanzada", precio:"48.000", icono: "👨🏻‍🍳"},
    {id: 9, titulo: "Aprender CSS", precio:"35.000", icono: "🧾"}
];

let carrito = JSON.parse(localStorage.getItem('carrito-usuario')) || [];

function actualizarContador() {
    document.getElementById('contador').innerText = carrito.length;
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const nuevoItem = { ...producto, uid: Date.now() };
    carrito.push(nuevoItem);
    
    localStorage.setItem('carrito-usuario', JSON.stringify(carrito));
    actualizarContador();
    alert("¡Añadido!");
}

function renderizar() {
    const contenedor = document.getElementById('lista-productos');
    contenedor.innerHTML = productos.map(p => `
        <div class="tarjeta">
            <div class="portada-tarjeta">${p.icono}</div>
            <h3>${p.titulo}</h3>
            <p class="precio">$${p.precio}</p>
            <button class="boton-agregar" onclick="agregarAlCarrito(${p.id})">Añadir al carrito</button>
        </div>
    `).join('');
}

renderizar();
actualizarContador();