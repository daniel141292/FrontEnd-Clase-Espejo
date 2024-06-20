window.addEventListener('load', function(){
    obtenerDatos()
})

var tabla = document.getElementById("Tabla")

var peso = document.getElementById('peso')
var precio = document.getElementById('precio')
var ubicacion = document.getElementById('ubicacion')
var idCliente = document.getElementById('id_Cliente')

async function obtenerDatos() {
    console.log("La pagina cargo de manera correcta")

    const respuesta =await fetch("http://localhost:4000/api/paquetes")
    const datos = await respuesta.json()

    console.log(datos)

    datos.forEach(element => {
        tabla.innerHTML += `
        <tr>
            <th scope="row">${element.id}</th>
            <td>${element.peso}</td>
            <td>${element.precio}</td>
            <td>${element.ubicacion}</td>
            <td>${element.idCliente}</td>
        </tr>
        `
    });


}

function agregarPaquete() {
    var paquete ={
        peso:peso.value,
        precio:precio.value,
        ubicacion:ubicacion.value,
        idCliente:idCliente.value
    }

    paqueteBack(paquete)

}

async function paqueteBack(paquete) {
    try {
        const agregarpaquete = await fetch("http://localhost:4000/api/paquete",{
            method: "POST",
            body: JSON.stringify(paquete),
            headers: {
                "Content-Type": "application/json"
            },
            cache:"no-cache"
        })
        alert("El paquete se registro de manera correcta")
    } catch (error) {
        console.log(error)
        alert("Error al registrar el paquete")
    }

    recargar()

}

function recargar() {
    location.reload();
}