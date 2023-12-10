import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Input = ({type, placeholder, id, label, width, func, valorInput, minLenght, maxLenght, min, max}) => {
  

  return (
    <div className='flex flex-col gap-1 mt-4 w-full'>

      <label htmlFor={id} className='font-medium'>{label}</label>

      <input className={`h-14 ${width} px-4 rounded-xl border-2 outline-pink-300 focus:shadow-pink-200 focus:shadow-md text-sm valid:bg-pink-100 valid:border-pink-300`} 
        type={type}
        value={valorInput}
        onChange={func}
        placeholder={placeholder}
        id={id}
        minLength={minLenght}
        maxLength={maxLenght}
        min={min}
        max={max}
        required
      />
    </div>
  );
};

export default Input;
