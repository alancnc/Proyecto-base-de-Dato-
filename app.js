// Función para guardar los datos en localStorage
document.getElementById("formularioDatos").addEventListener("submit", function(e) {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario
    
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const celular = document.getElementById("celular").value;
    const domicilio = document.getElementById("domicilio").value;
    const comedor = document.getElementById("comedor").value;

    // Crear un objeto con los datos
    const persona = {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        celular: celular,
        domicilio: domicilio,
        comedor: comedor
    };

    // Guardar los datos en localStorage
    localStorage.setItem(dni, JSON.stringify(persona));

    // Limpiar el formulario
    document.getElementById("formularioDatos").reset();
    alert("Datos guardados exitosamente");
});

// Función para buscar los datos por DNI
document.getElementById("formularioBusqueda").addEventListener("submit", function(e) {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario

    const dniBusqueda = document.getElementById("dniBusqueda").value;
    
    // Obtener los datos almacenados con el DNI
    const personaGuardada = localStorage.getItem(dniBusqueda);

    if (personaGuardada) {
        const persona = JSON.parse(personaGuardada);
        // Mostrar los datos de la persona
        document.getElementById("resultado").innerHTML = `
            <strong>Nombre:</strong> ${persona.nombre} <br>
            <strong>Apellido:</strong> ${persona.apellido} <br>
            <strong>DNI:</strong> ${persona.dni} <br>
            <strong>Celular:</strong> ${persona.celular} <br>
            <strong>Domicilio:</strong> ${persona.domicilio} <br>
            <strong>Comedor:</strong> ${persona.comedor}
        `;
    } else {
        document.getElementById("resultado").innerHTML = "No se encontraron datos para ese DNI.";
    }
});
