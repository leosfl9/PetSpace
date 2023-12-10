import imgError from '../../assets/png/erro-acesso.png'
import { Button } from '../../components'

export default function ErroAcesso() {
    return (
        <div className='flex items-center justify-center h-screen flex-col  p-4'>
            <h1 className='font-bold text-6xl'>Oops!</h1>
            <img src={imgError} alt="" />
            <span className='font-semibold text-2xl'>Erro de acesso!</span>
            <Button style='demitir' width='w-96' txt='Voltar para o login!' func={() => { window.location.href = '/' }} />
        </div>
    )
}