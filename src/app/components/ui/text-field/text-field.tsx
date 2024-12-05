import { TextFieldType, TextLabelType } from './text-field.types';
import { FC } from 'react';

export const TextField: FC<TextFieldType> = ({ name, error, className, ...props}) => {
    return (
        <input className={`box-border border border-border-primary outline-none block w-full rounded-md py-2 px-3.5 transition-colors hover:border-gray-400 focus-within:shadow-border focus-within:border-gray-400 ${error ? 'border-red-500 hover:border-red-500 focus-within:shadow-border-error' : ''} ${className}`} id={name} name={name} { ...props} />
    )
}

export const TextLabel: FC<TextLabelType> = ({ className, children,...props }) => {
    return (
        <label className={`text-sm text-text-secondary font-bold leading-5 inline-block mb-1 ${className}`} {...props}>{children}</label>
    )
}
