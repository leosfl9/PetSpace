import { api } from "./rota";
import Alerta from "./alertas";

export default async function CancelarConsulta (idAgendamento) {

    const token = sessionStorage.getItem('token');

    const requisicao = await fetch (api + `agendamento/funcionario/cancelar?idAgendamento=${Number(idAgendamento)}`, {
        method : 'PATCH',
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    });

    const resposta = await requisicao.json();

    if  (resposta.message == 'Agendamento Cancelado') {
        sessionStorage.setItem('status', 'success');
        sessionStorage.setItem('mensagem', 'Agendamento cancelado com sucesso');

        Alerta();
    } else {
        sessionStorage.setItem('status', 'error');
        sessionStorage.setItem('mensagem', 'Erro ao cancelar consulta');

        Alerta();
    }
}