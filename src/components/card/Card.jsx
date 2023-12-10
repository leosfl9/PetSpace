import { CalendarCheck, AlarmClock, PawPrint, Dog, CircleUser, AlertCircle } from "lucide-react"
import Button from './../../ui/button/Button';
import Modal from "antd/es/modal/Modal";
import { useState } from "react";
import Input from "../../ui/input/Input";
import FinalizarConsulta from "../../../api/finalizarConsulta";
import CancelarConsulta from "../../../api/cancelarConsulta";

export default function Card({ data, horario, pet, especie, dono, status, styleStatus, idAgendamento }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [botao, setBotao] = useState()
    const showModal = (e) => {
        setBotao(e)
        setIsModalOpen(true);
    };
    const handleOk = () => {
        if(botao == 1){
            FinalizarConsulta(idAgendamento)
        }else{
            CancelarConsulta(idAgendamento)
        }
        console.log(botao)
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        
        setIsModalOpen(false);
    };

    switch (status) {
        case 'Aberto':
            styleStatus = 'border-green-500 text-green-500'
            break;
        case 'Concluída':
            styleStatus = 'border-[#08C046] text-[#08C046]'
            break;

        case 'Em andamento':
            styleStatus = 'border-[#0868C0] text-[#0868C0]'
            break;

        case 'Cancelada':
            styleStatus = 'border-[#EF4A3C] text-[#EF4A3C]'

    }


    return (
        <div className="flex flex-col gap-6 bg-white p-6 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mt-6">

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <div className="flex p-3 gap-3">
                    <CalendarCheck size={24} />
                    <span>Data: {data}</span>
                </div>
                <div className="flex p-3 gap-3">
                    <AlarmClock size={24} />
                    <span>Horário: {horario}</span>
                </div>
                <div className="flex p-3 gap-3">
                    <PawPrint size={24} />
                    <span>Pet: {pet}</span>
                </div>
                <div className="flex p-3 gap-3">
                    <Dog size={24} />
                    <span>Espécie: {especie}</span>
                </div>
                <div className="flex p-3 gap-3">
                    <CircleUser size={24} />
                    <span>Dono: {dono}</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-center">
                <span className={`rounded-xl p-3 mt text-center bg-transparent border-2 font-medium w-auto flex items-center h-11 ${styleStatus} sm:w-48 justify-center`}>{status}</span>

                <div className="flex justify-between gap-6 sm:w-96">

                    {status == 'Em andamento' ? <>
                        <Button txt='Cancelar' style='cancelar' width='w-full' func={() => showModal(0)} />
                        <Button txt='Finalizar' style='purple' width='w-full' func={() => showModal(1)} />
                    </>
                        : null}

                </div>
            </div>

            <Modal className="confirma" open={isModalOpen} onOk={handleCancel} onCancel={handleOk} okButtonProps={{ style: { border: '2px solid red', color: 'red', fontWeight: 'bold' } }} cancelButtonProps={{ style: { border: '2px solid #08C046', color: '#08C046', fontWeight: 'bold' } }} okText="Não" cancelText="Sim" centered>
                <div className="flex flex-col gap-3 w-full justify-center items-center ">
                    <AlertCircle color="#424242" size={50} />
                    <p className="text-lg font-semibold text-[#424242] w-56">Tem certeza que deseja cancelar a consulta?</p>
                </div>
            </Modal>
        </div>
    )
}