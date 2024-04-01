import { ReactElement } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  text?: string;
  solid?: boolean;
  icon?: any;
}

export default function Button({ text, solid, icon }: ButtonProps): ReactElement {
  return <button className={`h-[40px] ${text ? "w-[120px]" : "w-[40px]"} 
                            flex items-center justify-center 
                            ${solid ? 'bg-purple text-soft-gray hover:bg-dark-purple transition hover:border-dark-purple' : 'bg-soft-gray text-purple hover:bg-purple transition hover:text-soft-gray'} 
                            border-solid rounded-[8px] border-purple border-[3px] 
                            text-[16px] text-center
                            mx-3`}>
    {icon}
    {text && <p className={icon && "ml-1"}>{text}</p>}
  </button>;
}