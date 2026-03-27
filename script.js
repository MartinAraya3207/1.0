let inventario = [];
let categorias = [];

function agregarCategoria() {
    const nombre = prompt("Nombre de la nueva categoría:");

    if (nombre && !categorias.includes(nombre)) {
        categorias.push(nombre);
        actualizarSelect();
    }
}

function actualizarSelect() {
    const select = document.getElementById("categoria");
    select.innerHTML = '<option value="">Categoría</option>';

    categorias.forEach(cat => {
        select.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
}

function agregarProducto() {
    const nombre = document.getElementById("nombre").value;
    const stock = document.getElementById("stock").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;

    if (nombre === "" || stock === "" || precio === "" || categoria === "") {
        alert("Completa todos los campos");
        return;
    }

    inventario.push({
        nombre,
        stock: parseInt(stock),
        precio: parseFloat(precio),
        categoria
    });

    limpiarCampos();
    mostrarInventario();
}

function mostrarInventario() {
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    inventario.forEach((p, index) => {
        tabla.innerHTML += `
            <tr>
                <td>${p.nombre}</td>
                <td>${p.stock}</td>
                <td>$${p.precio}</td>
                <td>${p.categoria}</td>
                <td class="acciones">
                    <button onclick="editarStock(${index})">Stock</button>
                    <button onclick="editarPrecio(${index})">Precio</button>
                    <button onclick="eliminarProducto(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function editarStock(index) {
    const nuevo = prompt("Nuevo stock:");
    if (nuevo) {
        inventario[index].stock = parseInt(nuevo);
        mostrarInventario();
    }
}

function editarPrecio(index) {
    const nuevo = prompt("Nuevo precio:");
    if (nuevo) {
        inventario[index].precio = parseFloat(nuevo);
        mostrarInventario();
    }
}

function eliminarProducto(index) {
    inventario.splice(index, 1);
    mostrarInventario();
}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("categoria").value = "";
}
