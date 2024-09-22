const importar = require('./collectibles')
const saludar = require('./saludar')

let hotToys = importar('Hot Toys');
let bandai = importar('Bandai'); 
let starWars = importar('Star Wars');

let unifiedCollectibles = [...hotToys,...bandai,...starWars]

let collectibles ={
    figuras : unifiedCollectibles,
    listFigures: function(){
        return this.figuras.forEach(figura => console.log(figura));
    },
    figuresByBrand: function(marca){
        return this.figuras.filter(figura=>figura.marca==marca)
    }

}
//collectibles.listFigures()
console.log(collectibles.figuresByBrand('Hot Toys'))
saludar("Francis")