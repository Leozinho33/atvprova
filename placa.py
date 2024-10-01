
carros = {
    "ABC1234": {
        "modelo": "Fusca",
        "marca": "Volkswagen",
        "cor": "azul"
    },
    "XYZ5678": {
        "modelo": "Civic",
        "marca": "Honda",
        "cor": "preto"
    },
    "LMN9012": {
        "modelo": "Mustang",
        "marca": "Ford",
        "cor": "vermelho"
    }
}

def consultar_carro(placa):
    # Checa se a placa está no dicionário
    carro = carros.get(placa)
    
    if carro:
        print(f"Informações do carro com placa {placa}:")
        print(f"Modelo: {carro['modelo']}")
        print(f"Marca: {carro['marca']}")
        print(f"Cor: {carro['cor']}")
    else:
        print("Carro não encontrado.")


while True:
    placa_input = input("Digite a placa do carro (ou 'sair' para encerrar): ").strip()
    
    if placa_input.lower() == 'sair':
        print("Encerrando o programa.")
        break
    
    consultar_carro(placa_input)
