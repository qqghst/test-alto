import React, { DOMAttributes } from 'react';
import style from './Button.module.scss'

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
    type: 'button' | 'submit' | 'reset',
    onClick?: (event: React.MouseEvent) => void,
    children: React.ReactNode,
    icon?: any,
    className?: string,
}

const Button: React.FC<IButtonProps> = ({ children, icon, type, onClick, className }) => {
    return (
        <button onClick={onClick} type={type} className={className}>
            {children}
        </button>
    )
}

export default Button;