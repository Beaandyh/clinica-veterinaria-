const atendimentos = [
    {
        id: 1,
        nome_animal: "Belinha",
        especie: "Cachorro",
        nome_tutor: "Beatriz",
        procedimentos: [
            {  servico_id: 201, qtd: 3},
            {  servico_id: 202, qtd: 0},
            {  servico_id: 203, qtd: 1}
        ]
    },
    {
        id: 2,
        nome_animal: "Remy",
        especie: "Hamster",
        nome_tutor: "Beatriz",
        procedimentos: [
            {  servico_id: 201, qtd: 1},
            {  servico_id: 202, qtd: 4},
            {  servico_id: 203, qtd: 3}
        ]
    },
    {
        id: 3,
        nome_animal: "Bela",
        especie: "Cachorro",
        nome_tutor: "Beatriz",
        procedimentos: [
            {  servico_id: 201, qtd: 2},
            {  servico_id: 202, qtd: 1},
            {  servico_id: 203, qtd: 2}
        ]
    }
];


async function buscarAtendimento(id) {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            const atendimento = atendimentos.find(atendimento => atendimento.id === id);

            if (atendimento) {
                resolve(atendimento);
            }
            else {
                reject("Usuário não foi encontrado nos registros de atendimentos");
            }

        }, 1000)
    });
}

module.exports = {
    buscarAtendimento
};