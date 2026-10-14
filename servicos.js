const servicos = [
    {id: 201, nome: "Raio X", preco: 50.90},
    {id: 202, nome: "Castração", preco: 200.99},
    {id: 203, nome: "Exame de sangue", preco: 78.00}
];

async function buscarServicos(id) {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            const servico = servicos.find(servico => servico.id === id);

            if (servico) {
                resolve(servico);
            }
            else {
                reject("Serviço não encontrado");
            }

        }, 1000)
    });
}

module.exports = {
    buscarServicos
}