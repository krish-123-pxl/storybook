import React from 'react'
import './Input.css'
const Input = (props) => {

    const {size="medium",label,...restProps} = props;
  return (
    <input className={`input ${size}`} {...restProps} placeholder={label}/>
  );
}

export default Input
