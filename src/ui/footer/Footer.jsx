export default function Footer() {
    return(
        <footer className=' flex justify-between items-center px-12 py-3 border-t-[1px] text-sm flex-wrap gap-4 h-6'>
            <nav>
                <ul className="flex gap-6 flex-wrap">   
                    <li><a href="">Políticas de privacidade</a></li>
                    <li><a href="">Termos e condições</a></li>
                    <li><a href="">Código de conduta</a></li>
                </ul>
            </nav>
            <p className="py-3">© 2023 PetSpace. Todos direitos reservados.</p>
        </footer>
    )
}