let carrito = JSON.parse(localStorage.getItem('carrito-usuario')) || [];

function mostrarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const totalElem = document.getElementById('total-pago');
    
    if (carrito.length === 0) {
        lista.innerHTML = "<p>Tu carrito está vacío.</p>";
        totalElem.innerText = "0";
        return;
    }

    lista.innerHTML = carrito.map(item => `
        <div class="item-carrito">
            <span>${item.titulo} - $${item.precio}</span>
            <button onclick="eliminar(${item.uid})" class="boton-quitar">Eliminar</button>
        </div>
    `).join('');

    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    totalElem.innerText = total;
}

function eliminar(uid) {
    carrito = carrito.filter(i => i.uid !== uid);
    localStorage.setItem('carrito-usuario', JSON.stringify(carrito));
    mostrarCarrito();
}

document.getElementById('form-pago').onsubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por tu compra!");
    localStorage.removeItem('carrito-usuario'); 
    window.location.href = "index.html"; 
};

mostrarCarrito();