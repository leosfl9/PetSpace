import { api } from "./rota"

export default async function ListarAgendamentos () {
    const token = sessionStorage.getItem('token');
    
    const requisicao = await fetch(api + `agendamento/funcionario/listar`,{
        method: 'POST',
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    });

    const resposta = await requisicao.json();

    // console.log(resposta);

    return resposta
    
};