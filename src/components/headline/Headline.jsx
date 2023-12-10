import { Button } from "../../components"

export default function Headline({name, txt, funcao}) {
    return(
        <div className='p-8 flex flex-col shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:flex-row sm:justify-between sm:px-28'>
            <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-medium">Olá, {name}!</h1>
                <p>Seja bem-vindo(a) ao portal corporativo</p>
            </div>

            <Button txt={txt} style='purple' width='w-56' func={funcao}/>
        </div>
    )
}

