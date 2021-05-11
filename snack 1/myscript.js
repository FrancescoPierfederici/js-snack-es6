// Snack 1:
// Creare un array di oggetti:
// Ogni oggetto descriverà una bycicleList da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bycicleList con peso minore utilizzando destructuring e template literal







const bicycleList = [
    {
        nome: "MountainBike",
        peso: 14
    },
    {
        nome: "EliasBike",
        peso: 13
    },
    {
        nome: "FlaviosBike",
        peso: 15
    },

    {
        nome: "FloriansBike",
        peso: 17
    },
    {
        nome: "BooleansBike",
        peso: 11
    },
]


// Uso un for e il template literal per stampare il peso minore


let bikeLeggera = bicycleList[0];



for (let index = 0; index < bicycleList.length; index++) {
    let element = bicycleList[index];
     if(bikeLeggera.peso > element.peso){
        bikeLeggera = element
       
    }
    
}
    
   
    

 
//
console.log( 
    `
     La bici con peso minore è la ${bikeLeggera.nome} con peso di ${bikeLeggera.peso} kg
    `
    );









// Ho stampato il peso minore in tutti e due i modi

// // esercizio florian


// const bicycleList = [
//     {
//         name: "MountainBike",
//         weight: 12
//     },
//     {
//         name: "EliasBike",
//         weight: 13
//     },
//     {
//         name: "FlaviosBike",
//         weight: 15
//     },

//     {
//         name: "FloriansBike",
//         weight: 17
//     },
// ]



// // bisogna trovare il peso minore 
// const findLighterBike = (array) => {
// let lighterBike;






// for (let index = 0; index < array.length; index++) {
//     const { nome,peso } = array[index];



//     if (!lighterBike || peso < lighterBike.peso) {
//         lighterBike = {
//             nome,
//             peso
//         }
//     }
// }
//      return lighterBike
//     }
// // eseguire la funzione dopo l'arrow function
//  const foundLighterBike = findLighterBike(bicycleList);
//  console.log(foundLighterBike);