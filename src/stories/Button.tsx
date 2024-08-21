import React from "react";

function Button(props){
    const { variant = "primary" , children,...props } = props;

    return (
        <button className={`button ${variant}` {...props}}>
            {children}
        </button>
    );
}
export default Button;