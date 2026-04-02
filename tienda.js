const productos = [
    { id: 1, titulo: "Cocina Esencial", precio: 15, icono: "🍲" },
    { id: 2, titulo: "Fuerza en Casa", precio: 20, icono: "💪" },
    { id: 3, titulo: "Código Limpio", precio: 25, icono: "💻" }
];

// Recuperar carrito guardado o empezar vacío
let carrito = JSON.parse(localStorage.getItem('carrito-usuario')) || [];

function actualizarContador() {
    document.getElementById('contador').innerText = carrito.length;
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const nuevoItem = { ...producto, uid: Date.now() };
    carrito.push(nuevoItem);
    
    // GUARDAR en el navegador para que la otra página lo lea
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