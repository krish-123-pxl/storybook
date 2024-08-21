import React from "react";
import './Button.css'

function Button(props){
    const { variant = "primary" , children,...restProps } = props;

    return (
        <button style={{backgroundColor:`${restProps.variantColor}`}} className={`button ${variant}`} {...restProps}>
            {children}
        </button>
    );
}
export default Button;