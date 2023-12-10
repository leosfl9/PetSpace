import { api } from "./rota";
import Alerta from "./alertas";

export default async function pesquisarAgendamento (data) {
    
    try {
        const requisicao = await fetch (api + `agendamento/pesquisar?data=${data}`, {
            method : 'PATCH'
        });
    
        const resposta = await requisicao.json();
        console.log(resposta);


        if (resposta.length < 1) {
                    
            sessionStorage.setItem('status', 'error');
            sessionStorage.setItem('mensagem', 'Não possui agendamentos para esse dia');
            Alerta();
            return;
        } else {
            //Aqui fica a lógica para renderizar os horários 
            return resposta
        }


    } catch (error) {
        sessionStorage.setItem('status', 'error');
        sessionStorage.setItem('mensagem', 'Erro ao puxar agendamentos');
        Alerta();
    }
};
