let arrayNumber = [42, 17, 8, 91, 5, 33, 70, 12, 56, 29];
let [posi0,,posi2,,posi4,...rest] = arrayNumber

let mascota ={
    nombre: "rulito",
    tipoDeMascota: "Perro",
    color: "Blanco",
    raza: "caniche"
}
let {nombre,tipoDeMascota,color,raza} = mascota;

console.log(`
Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoDeMascota}, de
color: ${color} y su raza es: ${raza}.
    `);
console.log("Hola UWU");

