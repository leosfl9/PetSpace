import { Eye, EyeOff } from "lucide-react"
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const InputPassword = ({placeholder, id, label, width, func, valorInput}) => {

    const [visible, setVisible] = useState(true); 

    return (
        <div className='flex flex-col gap-1 mt-4'>

            <label htmlFor={id} className='font-medium'>{label}</label>

            <div className='relative'>
                <input className={`h-14 ${width} px-4 rounded-xl border-2 outline-pink-300 focus:shadow-pink-200 focus:shadow-md text-sm valid:bg-pink-100 valid:border-pink-300`} 
                type={visible ? "password" : "text"}
                value={valorInput}
                onChange={func}
                placeholder={placeholder}
                minLength={1}
                maxLength={35}
                required
                id={id}
                />
                <div className="absolute right-4 top-[18px] cursor-pointer" onClick={() => setVisible(!visible)}>
                    {visible ? (
                    <Eye color="#B7BAC4" size={20} />
                    ) : (
                    <EyeOff color="#B7BAC4" size={20} />
                    )}  
                </div>
            </div>

        </div>
  );
};

export default InputPassword;
