import './Button.css';
import React from 'react';

const Button: React.FC = (props: any) => {

    return (
        <button
            onClick={props.onClick}
            style={{
                color: `${props.textColor}`,
                backgroundColor: `${props.variantColor}`,
                width: `${props.width}`,
            }}
            className={`button`}
            {...props}>
            {props.innerText}
        </button>
    );
}
export default Button;