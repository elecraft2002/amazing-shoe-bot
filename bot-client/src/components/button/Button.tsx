import React from 'react'
import "./button.css"

interface Props {
    border?: 0;
    color?: "var(--highlite)";
    children?: React.ReactNode;
    height?: string;
    onClick?: () => void;
    radius?: string
    width?: string;
}

export default function Button({ border, color, height, onClick, radius, width, children }: Props) {
    return (
        <button className='button' onClick={onClick} style={{ color: color }}>{children}</button>
    )
}
