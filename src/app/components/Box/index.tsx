import React from 'react';
import './styles.css';

type TBoxProps = {
    children: React.ReactNode
}

const Box = ({ children }: TBoxProps) => {
    return <div className="box">
        {children}
    </div>
}

export default Box