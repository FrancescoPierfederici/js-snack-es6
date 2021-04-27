// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Usiamo i nuovi metodi degli array foreach o filter.


function sublist(array, startIndex, endIndex) {

    return array.filter((element, index) => index >= startIndex && index <= endIndex);
        // console.log(`element: ${element}, index: ${index}, startIndex:${startIndex}, endIndex:${endIndex}, cond:$(index >= startIndex && index <= endIndex`));

    //    if(index >= startIndex && index <= endIndex) {
    //        return true;
    //    }else{
    //        return false;
    //    }

//     });

}

function sublistForeach(array, startIndex, endIndex) {
    const result = [];

    array.forEach((element, index) => {
        if (index >= startIndex && index <= endIndex) {
            result.push(element);
        }
    });
    return result;
    // E' LA STESSA COSA DI SOPRA
    // array.forEach(function(element, index) {

    // })
}

var array = [10, 5, 6, 11, 20];
var nuovoArray = sublist(array, 1, 3);
console.log(nuovoArray);

var nuovoArray2 = sublistForeach(array, 1, 3);

console.log(nuovoArray);
console.log(nuovoArray2);