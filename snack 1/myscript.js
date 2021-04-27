// Snack 1:
// Creare un array di oggetti:
// Ogni oggetto descriverà una bycicleList da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bycicleList con peso minore utilizzando destructuring e template literal







const bicycleList = [
    {
        nome: "MountainBike",
        peso: 12
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
]


// Uso un for e il template literal per stampare il peso minore

for (let index = 0; index < bicycleList.length; index++) {
    const element = bicycleList[index];
    let pesoMinore = [];
    if (element.peso < 13) {
        pesoMinore.push(
            `${element.peso}`
        );
        console.log(pesoMinore)
        //Destructuring per stampare il peso minore da un array
        let [pesoMinoreOne] = pesoMinore;
        console.log(pesoMinoreOne);
    }
};
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
//     let lighterBike;





//     for (let index = 0; index < array.length; index++) {
//         const { name, weight } = array[index];



//         if (!lighterBike || weight < lighterBike.weight) {
//             lighterBike = {
//                 name,
//                 weight
//             }
//         }
//     }
//     return lighterBike
// }
// // eseguire la funzione dopo l'arrow function
// const foundLighterBike = findLighterBike(bicyclesList);
// console.log(foundLighterBike);