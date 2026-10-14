const fs = require("fs/promises"); 

const {buscarAtendimento} = require("./atendimentos");

const {buscarServicos} = require("./serviços");


async function fechar_conta(atendimento_id) {
    
    try{
        console.log("\nBuscando Atendimento... ");
        const atendimento = await buscarAtendimento(atendimento_id);
        console.log(atendimento);

        let total = 0

        const procedimentosClinicos = [];

        for (const procedimentos of atendimento.procedimentos) {
            const servico = await buscarServicos(procedimentos.servico_id);

            const sub_total = servico.preco * procedimentos.qtd;

            total += sub_total;

            console.log(`\nQuantidade do procedimento: ${procedimentos.qtd} X ${servico.nome} = R$ ${sub_total}`);
        }
        console.log("\n------ Total Final do Extrato ------");
        console.log(`Valor do extrato: ${total}`);

    }
    catch(erro) {
        console.error("Erro ao exibir extrado", erro);
    }


}

fechar_conta(1);