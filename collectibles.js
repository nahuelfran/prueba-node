const fs = require('fs');

function importar(...marcas) {
    let figuras1 = JSON.parse(fs.readFileSync('./datos/figuras1.json','utf-8'))
    let figuras3 = JSON.parse(fs.readFileSync('./datos/figuras2.json','utf-8'))
    let figuras2 = JSON.parse(fs.readFileSync('./datos/figuras3.json','utf-8'))
    let figuras = [...figuras1,...figuras2,...figuras3]

    return figuras.filter((figura)=> marcas.includes(figura.marca))

}

module.exports=importar;