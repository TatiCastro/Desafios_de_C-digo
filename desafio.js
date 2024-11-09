const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite o nome do Herói: ", nome => {
    readline.question("Digite o XP do Herói: ", xp => {
        xp = parseInt(xp, 10);

        let classificacao;

        if (xp < 1000) {
            classificacao = "Ferro";
        } else if (xp >= 1001 && xp <= 2000) {
            classificacao = "Bronze";
        } else if (xp >= 2001 && xp <= 5000) {
            classificacao = "Prata";
        } else if (xp >= 5001 && xp <= 7000) {
            classificacao = "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
            classificacao = "Platina";
        } else if (xp >= 8001 && xp <= 9000) {
            classificacao = "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
            classificacao = "Imortal";
        } else {
            classificacao = "Radiante";
        }

        console.log(`O Herói de nome ${nome} está no nível: ${classificacao}`);
        readline.close();
    });
});



