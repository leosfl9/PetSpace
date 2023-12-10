export default function Button({txt, style, width, func, disable}) {

    switch(style) {
        case  'login' :
            style = 'bg-[#000000] text-white w-96 h-14 rounded-[56px] my-8  font-semibold text-base hover:bg-[#A57CF8] ease-in-out duration-300 '
            break; 
        case 'purple' :
            style = 'bg-[#8C52FF] text-white h-11 rounded-xl my-8 w-18 font-medium text-base hover:bg-[#A57CF8] ease-in-out duration-300 px-3'
            break; 
        case 'cancelar' :
            style = 'hover:text-white border-2 border-[#424242] text-[#424242] h-11 rounded-xl my-8 w-18 font-medium text-base hover:bg-[#424242] ease-in-out duration-300 px-3'
            break;
        case 'demitir' :
            style = 'bg-[#EF4A3C] text-white h-11 rounded-xl my-8 w-18 font-medium text-base hover:bg-[#f56b5e] ease-in-out duration-300 px-3'


    }


    return(
        <button type="button" className={`${style} ${width} ${disable ? 'hidden' : 'block'}`} onClick={func} >{txt}</button>
    )

}