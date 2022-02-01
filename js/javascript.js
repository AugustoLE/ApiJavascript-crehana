const datos = [
    {
        id: 1,
        nombre: "Pastel",
        precio: 10
    },
    {
        id: 2,
        nombre: "Pan",
        precio: 1.5
    },
    {
        id: 3,
        nombre: "Soda",
        precio: 3
    }
]

const obtenerDatos = () => {
    return new Promise ((resolve, reject) =>{
    setTimeout(() =>{
        resolve(datos);
        return datos;
    },1500);
    });
}

async function asincrono(){
    const datos_asincrono = await obtenerDatos();
    console.log(datos_asincrono)
}

asincrono();