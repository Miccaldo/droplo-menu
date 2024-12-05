import { FC } from "react";
import { ButtonProps } from "./button.types";

export const Button: FC<ButtonProps> = ({variant='primary', disabled, className='', children, ...props}) => {

    const getVariantStyles = () : string => {
        if(variant === 'primary'){
            return 'bg-violet-dark hover:bg-violet-normal text-white'
        }else if(variant === 'secondary'){
            return 'bg-white text-slate-secondary border border-gray-light hover:border-gray-400'
        }else{
            return 'bg-white border border-violet-light text-violet-normal hover:border-violet-normal hover:text-violet-dark'
        }
    }

    return (
        <button disabled={disabled} className={`${getVariantStyles()} transition-colors rounded-lg px-3.5 py-2.5 text-sm leading-5 font-semibold ${className} ${disabled ? 'pointer-events-none grayscale opacity-20' : ''}`} {...props}>
            {children}
        </button>
    )
}