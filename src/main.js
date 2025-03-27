document.addEventListener("DOMContentLoaded", function() {
    
    // Capturar elementos del DOM
    const botonAgregar = document.getElementById("agregarButton");
    const inputTarea = document.getElementById("tareaTxt");
    const listaTareas = document.getElementById("listaTareas");

    // Función para agregar una nueva tarea
    botonAgregar.addEventListener("click", function() {
        let textoTarea = inputTarea.value.trim();

        if (textoTarea !== "") {
            // Crear un nuevo elemento de lista
            let nuevaTarea = document.createElement("li");
            nuevaTarea.className = "list-group-item d-flex justify-content-between align-items-center";
            nuevaTarea.innerHTML = `
                ${textoTarea}
                <button class="btn btn-danger btn-sm eliminar-tarea">X</button>
            `;

            // Agregar la tarea a la lista
            listaTareas.appendChild(nuevaTarea);

            alert("Tarea guardada correctamente")

            // Limpiar el input
            inputTarea.value = "";

            // Agregar evento para eliminar tarea
            nuevaTarea.querySelector(".eliminar-tarea").addEventListener("click", function() {
                nuevaTarea.remove();
            });
        } else {
            alert("Complete los campos por favor")
        }

        
    });

    inputTarea.addEventListener("keydown", function(event){

        if (event.key === "Enter") {

            event.preventDefault();
            botonAgregar.click();
        }
    })

});