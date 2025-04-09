document.addEventListener("DOMContentLoaded", function () {
    // Capturar elementos del DOM
    const botonAgregar = document.getElementById("agregarButton");
    const inputTarea = document.getElementById("tareaTxt");
    const listaTareas = document.getElementById("listaTareas");

    // Función para agregar una nueva tarea
    botonAgregar.addEventListener("click", function () {
        let textoTarea = inputTarea.value.trim();

        if (textoTarea !== "") {
            // Crear un nuevo elemento de lista
            let nuevaTarea = document.createElement("li");
            nuevaTarea.classList.add("list-group-item");

            // Crear contenedor principal (fila flex)
            let contenedorFila = document.createElement("div");
            contenedorFila.classList.add("d-flex", "justify-content-between", "align-items-center", "flex-wrap");

            // Crear contenedor izquierdo (texto)
            let contenedorIzquierda = document.createElement("div");
            contenedorIzquierda.classList.add("texto-tarea");
            contenedorIzquierda.textContent = textoTarea;

            // Crear contenedor derecho (select y botones)
            let contenedorDerecha = document.createElement("div");
            contenedorDerecha.classList.add("d-flex", "gap-2", "flex-wrap", "align-items-center");

            // Crear el select para el estado
            let selectEstado = document.createElement("select");
            selectEstado.classList.add("form-select", "estado-tarea");
            selectEstado.style.width = "150px";
            selectEstado.innerHTML = `
                <option value="pendiente">Pendiente</option>
                <option value="terminado">Terminado</option>
            `;

            selectEstado.addEventListener("change", function () {
                if (selectEstado.value === "terminado") {
                    selectEstado.disabled = true;
                }
            });

            // Crear botón de editar
            let btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            btnEditar.classList.add("btn", "btn-warning", "editar-tarea");

            // Crear botón de eliminar
            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.classList.add("btn", "btn-danger", "eliminar-tarea");

            // Agregar elementos al contenedor derecho
            contenedorDerecha.appendChild(selectEstado);
            contenedorDerecha.appendChild(btnEditar);
            contenedorDerecha.appendChild(btnEliminar);

            // Agregar los dos contenedores al contenedor principal
            contenedorFila.appendChild(contenedorIzquierda);
            contenedorFila.appendChild(contenedorDerecha);

            // Agregar el contenedor principal al li
            nuevaTarea.appendChild(contenedorFila);

            // Agregar la tarea a la lista
            listaTareas.appendChild(nuevaTarea);

            alert("Tarea guardada correctamente");

            // Limpiar el input
            inputTarea.value = "";

            // Evento para eliminar tarea
            btnEliminar.addEventListener("click", function () {
                nuevaTarea.remove();
            });

            // Evento para editar tarea
            btnEditar.addEventListener("click", function () {
                let nuevoTexto = prompt("Editar tarea:", contenedorIzquierda.textContent);
                if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
                    contenedorIzquierda.textContent = nuevoTexto.trim();
                }
            });

        } else {
            alert("Complete los campos por favor");
        }
    });

    // Permitir agregar con Enter
    inputTarea.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            botonAgregar.click();
        }
    });
});
