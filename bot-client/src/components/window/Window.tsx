import React from 'react'
import "./window.css"

interface Props {
    border?: 0;
    color?: "var(--highlite)";
    children?: React.ReactNode;
    height?: string;
    onClick?: () => void;
    radius?: string
    width?: string;
}

export default function Window({ children, onClick, color, border }: Props) {
    return (
        <div className='loading__container'>
            <div className='loading__center'>
                {children}
            </div>
        </div>
    )
}
