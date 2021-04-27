// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


let footballTeams = [
    {
        nome: "Inter",
        puntifatti: 0,
        fallisubiti: 0,

    },

    {
        nome: "Lazio",
        puntifatti: 0,
        fallisubiti: 0,

    },
    {
        nome: "Atalanta",
        puntifatti: 0,
        fallisubiti: 0,

    },
    {
        nome: "Spezia",
        puntifatti: 0,
        fallisubiti: 0,

    },
    {
        nome: "Benevento",
        puntifatti: 0,
        fallisubiti: 0,

    },


]




// Math.round(Math.random()*100);

for (var i = 0; i < footballTeams.length; i++) {
    var team = footballTeams[i];

    team.fallisubiti = Math.round(Math.random() * 100)
    team.puntifatti = Math.round(Math.random() * 100)

    console.log(team)


}


    // newTeam.push(team)
    // 
    // let { puntifatti, fallisubiti } = team;
    // newTeam.push(puntifatti, fallisubiti);
