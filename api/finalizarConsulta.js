import { api } from "./rota";
import Alerta from "./alertas";

export default async function FinalizarConsulta (idAgendamento) {
    const token = sessionStorage.getItem('token');

    const requisicao = await fetch (api + `agendamento/funcionario/finalizar?idAgendamento=${idAgendamento}`, {
        method : 'PATCH',
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    });

    const resposta = await requisicao.json();

    if  (resposta.message == 'Agendamento Finalizado') {
        sessionStorage.setItem('status', 'success');
        sessionStorage.setItem('mensagem', 'Agendamento finalizado com sucesso');

        Alerta();
    } else {
        sessionStorage.setItem('status', 'error');
        sessionStorage.setItem('mensagem', 'Erro ao finalizar consulta');

        Alerta();
    }
}