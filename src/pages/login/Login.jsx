import { Header, Input, Button, InputPassword } from "../../components"
import { useState } from "react";
import imgLogin from '../../assets/svg/img-login.svg'
import Entrar from "../../../api/login";


export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');    

    const logar = async () => {
        Entrar(email, senha);
    };

    
    return (
        <>
            <Header />
            <div className=" flex items-center justify-center flex-wrap-reverse h-full sm:mt-52">
                <div className="px-3">
                    <h1 className='font-bold text-xl mb-8'>Login na plataforma</h1>
                    <Input id='nif' label='NIF' placeholder='Digite seu NIF' type='text' width='w-96'  func={(e) => setEmail(e.target.value)} minLenght={1} maxLenght={7}/>
                    <InputPassword id='senha' label='Senha' placeholder='Digite sua senha' width='w-96'  valorInput={senha} func={(e) => setSenha(e.target.value)}/>
                    <Button txt='Entrar' style='login' width='w-96' func={logar}/>
                </div>
                <img src={imgLogin} alt="" />
            </div>
            {/* <Footer/> */}

        </>
    )
}