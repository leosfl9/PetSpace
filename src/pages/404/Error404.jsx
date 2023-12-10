import img404 from '../../assets/png/404.png'
import { Button } from '../../components'

export default function Error404( ) {
    return(
        <div className='flex items-center justify-center h-screen flex-col bg-[#EEDCFC] gap-9 p-4'>
            <h1 className='font-bold text-6xl'>Oops!</h1>
            <img src={img404} alt="" />
            <Button style='purple' width='w-96' txt='Voltar para o login!' func={() => {window.location.href = '/'}}/>
        </div>
    )
} 