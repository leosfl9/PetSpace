import Alerta from "./alertas";

export default async function CadastrarHorario (data, hora, func) {

    const token = sessionStorage.getItem('token');

    const requisicao = await fetch (`https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/agendamento/funcionario/cadastro?data=${data}&horario=${hora}`,{
        method : 'POST',
        headers : {
            'Authorization': `Bearer ${token}`,
        }
    });

    const resposta = await requisicao.json();

    if (resposta.message == 'Horario Cadastrado!') {
        sessionStorage.setItem('status' , 'success');
        sessionStorage.setItem('mensagem', resposta.message);

        func
    } else {
        sessionStorage.setItem('status' , 'error');
        sessionStorage.setItem('mensagem', 'Erro ao cadastrar um horário, tente novamente mais tarde');
    }

    Alerta();
}