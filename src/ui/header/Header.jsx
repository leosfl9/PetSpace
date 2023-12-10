import { Power } from "lucide-react"
export default function Header({logoff, func}) {
    return (
        <header className="border-b-[1px] flex justify-center items-center py-2 px-4 gap-3">
            <h1 className="font-bold w-full text-center">Pet<span className="text-[#8C52FF]">Space</span> Corporativo</h1>

            <div className={`hover:bg-slate-200 p-2 rounded-full cursor-pointer ease-in-out duration-300 ${logoff ? 'block' : 'hidden'}`} onClick={func}>
                <Power color="#EF4A3C" size={16}/>
            </div>
        </header>
    )
}