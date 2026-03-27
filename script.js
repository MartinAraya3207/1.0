let inventario = [];
let categorias = [];
let fiados = [];

/* CATEGORÍAS */
function agregarCategoria() {
    const nombre = prompt("Nueva categoría:");
    if (nombre && !categorias.includes(nombre)) {
        categorias.push(nombre);
        actualizarSelect();
    }
}

function actualizarSelect() {
    const select = document.getElementById("categoria");
    select.innerHTML = '<option value="">Categoría</option>';

    categorias.forEach(c => {
        select.innerHTML += `<option>${c}</option>`;
    });
}

/* INVENTARIO */
function agregarProducto() {
    const nombre = document.getElementById("nombre").value;
    const stock = document.getElementById("stock").value;
    const precio = document.getElementById("precio").value;
    const descuento = document.getElementById("descuento").value || 0;
    const categoria = document.getElementById("categoria").value;

    if (!nombre || !stock || !precio || !categoria) {
        alert("Completa todo");
        return;
    }

    inventario.push({
        nombre,
        stock: parseInt(stock),
        precio: parseFloat(precio),
        descuento: parseFloat(descuento),
        categoria
    });

    mostrarInventario();
}

function mostrarInventario() {
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    inventario.forEach((p, i) => {
        let total = p.precio - (p.precio * p.descuento / 100);

        tabla.innerHTML += `
            <tr>
                <td>${p.nombre}</td>
                <td>${p.stock}</td>
                <td>$${p.precio}</td>
                <td>${p.descuento}%</td>
                <td>$${total.toFixed(2)}</td>
                <td>${p.categoria}</td>
                <td>
                    <button onclick="editarProducto(${i})">Editar</button>
                    <button onclick="eliminarProducto(${i})">X</button>
                </td>
            </tr>
        `;
    });
}

function editarProducto(i) {
    let nuevoNombre = prompt("Nuevo nombre:", inventario[i].nombre);
    let nuevoPrecio = prompt("Nuevo precio:", inventario[i].precio);

    if (nuevoNombre) inventario[i].nombre = nuevoNombre;
    if (nuevoPrecio) inventario[i].precio = parseFloat(nuevoPrecio);

    mostrarInventario();
}

function eliminarProducto(i) {
    inventario.splice(i, 1);
    mostrarInventario();
}

/* FIADOS */
function agregarFiado() {
    const nombre = document.getElementById("nombreFiado").value;
    const deuda = document.getElementById("deudaFiado").value;

    if (!nombre || !deuda) return;

    fiados.push({
        nombre,
        deuda: parseFloat(deuda)
    });

    mostrarFiados();
}

function mostrarFiados() {
    const tabla = document.getElementById("tablaFiados");
    tabla.innerHTML = "";

    fiados.forEach((f, i) => {
        tabla.innerHTML += `
            <tr>
                <td>${f.nombre}</td>
                <td>$${f.deuda}</td>
                <td>
                    <button onclick="editarFiado(${i})">Editar</button>
                    <button onclick="eliminarFiado(${i})">X</button>
                </td>
            </tr>
        `;
    });
}

function editarFiado(i) {
    let nuevoNombre = prompt("Nuevo nombre:", fiados[i].nombre);
    let nuevaDeuda = prompt("Nueva deuda:", fiados[i].deuda);

    if (nuevoNombre) fiados[i].nombre = nuevoNombre;
    if (nuevaDeuda) fiados[i].deuda = parseFloat(nuevaDeuda);

    mostrarFiados();
}

function eliminarFiado(i) {
    fiados.splice(i, 1);
    mostrarFiados();
}
