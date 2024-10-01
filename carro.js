const carros = {
    "ABC1234": {
        modelo: "Fusca",
        marca: "Volkswagen",
        cor: "azul"
    },
    "XYZ5678": {
        modelo: "Civic",
        marca: "Honda",
        cor: "preto"
    },
    "LMN9012": {
        modelo: "Mustang",
        marca: "Ford",
        cor: "vermelho"
    }
};

function consultarCarro(placa) {
    
    const carro = carros[placa];
    
    if (carro) {
        console.log(`Informações do carro com placa ${placa}:`);
        console.log(`Modelo: ${carro.modelo}`);
        console.log(`Marca: ${carro.marca}`);
        console.log(`Cor: ${carro.cor}`);
    } else {
        console.log("Carro não encontrado.");
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt() {
    readline.question("Digite a placa do carro (ou 'sair' para encerrar): ", (placaInput) => {
        if (placaInput.toLowerCase() === 'sair') {
            console.log("Encerrando o programa.");
            readline.close();
        } else {
            consultarCarro(placaInput.trim());
            prompt(); 
        }
    });
}

prompt();
