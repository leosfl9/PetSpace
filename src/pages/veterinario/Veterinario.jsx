import { Header, Headline, Title, Input, Card } from "../../components"
import { useEffect, useState } from "react";
import Autenticar from "../../../api/autenticacao";
import Sair from "../../../api/sair";
import Modal from "antd/es/modal/Modal";
import CadastrarHorario from "../../../api/cadHorario";
import Alerta from "../../../api/alertas";
import ListarAgendamentos from "../../../api/listarAgendamentos";
import pesquisarAgendamento from "../../../api/pesquisaAgendamentos";
import FinalizarConsulta from "../../../api/finalizarConsulta";

export default function Veterinario() {
    const [dados, setDados] = useState()
    const [status, setStatus] = useState()
    const [pesqData, setPesData] = useState()

    async function renderizarAgendamento(e) {
        console.log(await ListarAgendamentos())
        const retorno = await ListarAgendamentos()
        var data = await retorno.map((c, i)=>{
            if(status == undefined){
                if(pesqData == c.data){
                    return <Card idAgendamento={c.idAgendamento} data={c.data} dono={c.idCliente} especie={c.especie} horario={c.horario} pet={c.nomeAnimal} status={c.status == 0 ? 'Aberto' : c.status == 1 ? 'Em andamento' : c.status == 2 ? 'Concluída' : 'Cancelada' } />
                }else if(pesqData == undefined || pesqData == ''){                    
                    return <Card idAgendamento={c.idAgendamento} data={c.data} dono={c.idCliente} especie={c.especie} horario={c.horario} pet={c.nomeAnimal} status={c.status == 0 ? 'Aberto' : c.status == 1 ? 'Em andamento' : c.status == 2 ? 'Concluída' : 'Cancelada' } />
                }
            }else if(status == 0 && c.status == status){
                if(pesqData == c.data){
                    return <Card idAgendamento={c.idAgendamento} data={c.data} dono={c.idCliente} especie={c.especie} horario={c.horario} pet={c.nomeAnimal} status={c.status == 0 ? 'Aberto' : c.status == 1 ? 'Em andamento' : c.status == 2 ? 'Concluída' : 'Cancelada' } />
                }else if(pesqData == undefined || pesqData == ''){                    
                    return <Card idAgendamento={c.idAgendamento} data={c.data} dono={c.idCliente} especie={c.especie} horario={c.horario} pet={c.nomeAnimal} status={c.status == 0 ? 'Aberto' : c.status == 1 ? 'Em andamento' : c.status == 2 ? 'Concluída' : 'Cancelada' } />
                }
            }else if(status == 1 && c.status == status){
                if(pesqData == c.data){
                    return <Card idAgendamento={c.idAgendamento} data={c.data} dono={c.idCliente} especie={c.especie} horario={c.horario} pet={c.nomeAnimal} status={c.status == 0 ? 'Aberto' : c.status == 1 ? 'Em andamento' : c.status == 2 ? 'Concluída' : 'Cancelada' } />
                }else if(pesqData == undefined || pesqData == ''){                    
                    return <Card idAgendamento={c.idAgendamento} data={c.data} dono={c.idCliente} especie={c.especie} horario={c.horario} pet={c.nomeAnimal} status={c.status == 0 ? 'Aberto' : c.status == 1 ? 'Em andamento' : c.status == 2 ? 'Concluída' : 'Cancelada' } />
                }
            }else if(status == 2 && c.status == status){
                if(pesqData == c.data){
                    return <Card idAgendamento={c.idAgendamento} data={c.data} dono={c.idCliente} especie={c.especie} horario={c.horario} pet={c.nomeAnimal} status={c.status == 0 ? 'Aberto' : c.status == 1 ? 'Em andamento' : c.status == 2 ? 'Concluída' : 'Cancelada' } />
                }else if(pesqData == undefined || pesqData == ''){                    
                    return <Card idAgendamento={c.idAgendamento} data={c.data} dono={c.idCliente} especie={c.especie} horario={c.horario} pet={c.nomeAnimal} status={c.status == 0 ? 'Aberto' : c.status == 1 ? 'Em andamento' : c.status == 2 ? 'Concluída' : 'Cancelada' } />
                }
            }else if(status == 3 && c.status == status){
                if(pesqData == c.data){
                    return <Card idAgendamento={c.idAgendamento} data={c.data} dono={c.idCliente} especie={c.especie} horario={c.horario} pet={c.nomeAnimal} status={c.status == 0 ? 'Aberto' : c.status == 1 ? 'Em andamento' : c.status == 2 ? 'Concluída' : 'Cancelada' } />
                }else if(pesqData == undefined || pesqData == ''){                    
                    return <Card idAgendamento={c.idAgendamento} data={c.data} dono={c.idCliente} especie={c.especie} horario={c.horario} pet={c.nomeAnimal} status={c.status == 0 ? 'Aberto' : c.status == 1 ? 'Em andamento' : c.status == 2 ? 'Concluída' : 'Cancelada' } />
                }
            }
        })
        setDados(data)
    }

    useEffect(() => {
        Autenticar(['Veterinario']);
        renderizarAgendamento(0)
        Alerta();
    }, []);

    useEffect(()=>{
        renderizarAgendamento()
        console.log(pesqData)
    }, [status, pesqData])

    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');

    const cadHora = async () => {
        CadastrarHorario(data, horario, setIsModalOpen(false));
    };

    const pesqAgen = async (e) => {
        console.log(await pesquisarAgendamento(e))
        setPesData(e)
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const dia = dataAtual.getDate().toString().padStart(2, '0');

    const dataFormatada = `${ano}-${mes}-${dia}`;

    return (
        <>
            <Header logoff={true} func={Sair} />
            <Headline name='Luiz' txt='Cadastrar horário' funcao={showModal} />

            <div className="p-8 sm:p-28">
                <Title title='Suas consultas' />

                <div className="flex flex-col gap-1 mt-9 sm:flex-wrap sm:flex-row sm:justify-between">

                    <div className="flex gap-3 flex-wrap" >
                        <div className=" flex gap-3 mt-4 items-center ">
                            <input type="radio" value={0} onChange={(e)=> setStatus(e.target.value)} id="Aberto" name="radio" />
                            <span>Aberto</span>
                        </div>
                        <div className=" flex gap-3 mt-4 items-center ">
                            <input type="radio" value={1} onChange={(e)=> setStatus(e.target.value)} id="Em andamento" name="radio" />
                            <span>Em andamento</span>
                        </div>
                        <div className=" flex gap-3 mt-4 items-center">
                            <input type="radio" value={2} onChange={(e)=> setStatus(e.target.value)} id="Concluidas" name="radio" />
                            <span>Concluídas</span>
                        </div>
                        <div className=" flex gap-3 mt-4 items-center">
                            <input type="radio" value={3} onChange={(e)=> setStatus(e.target.value)} id="Canceladas" name="radio" />
                            <span>Canceladas</span>
                        </div>
                    </div>

                    <Input id='date' label='' placeholder='Selecione a data' type='date' width='w-56' func={(e) => pesqAgen(e.target.value)} />
                </div>

                {dados}
                {/* <Card data='20/20/2020' dono='Zé da Manga' especie='Cachorro' horario='20:20' pet='Rex' status='Em andamento' /> */}

                <Modal className="modal" title={<h1 className="text-[#424242] text-2xl font-bold">Cadastrar horário</h1>} open={isModalOpen} onOk={cadHora} onCancel={handleCancel} okButtonProps={{ style: { backgroundColor: '#8C52FF' } }} okText="Cadastrar" cancelText="Cancelar" centered>
                    <form className="flex flex-col gap-4">
                        <Input id='data' width='w-full' type='date' label='Data' func={(e) => setData(e.target.value)} min={dataFormatada} />
                        <Input id='horario' width='w-full' type='time' label='Horário' func={(e) => setHorario(e.target.value)} />
                    </form>
                </Modal>

            </div>

        </>
    )
}