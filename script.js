let inventario = [];

function agregarProducto() {
    const nombre = document.getElementById("nombre").value;
    const stock = document.getElementById("stock").value;

    if (nombre === "" || stock === "") {
        alert("Completa los campos");
        return;
    }

    inventario.push({ nombre, stock: parseInt(stock) });
    limpiarCampos();
    mostrarInventario();
}

function mostrarInventario() {
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    inventario.forEach((producto, index) => {
        tabla.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.stock}</td>
                <td class="acciones">
                    <button onclick="editarStock(${index})">Editar</button>
                    <button onclick="eliminarProducto(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function editarStock(index) {
    const nuevoStock = prompt("Nuevo stock:");

    if (nuevoStock !== null && nuevoStock !== "") {
        inventario[index].stock = parseInt(nuevoStock);
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
}
