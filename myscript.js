// Snack 1:
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal







let bici = [
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

for (let index = 0; index < bici.length; index++) {
    const element = bici[index];
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

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.




