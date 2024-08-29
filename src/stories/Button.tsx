import React from "react";
import './Button.css'
// import { action,actions } from '@storybook/addon-actions'
// import PropTypes from 'prop-types';


function Button(props){

    return (
        <button onClick={props.onClick} style={{color:`${props.textColor}`,backgroundColor:`${props.variantColor}`,width:`${props.width}`}} className={`button ${props.variantColor}`} {...props}>
            {props.innerText}
        </button>
    );
}
export default Button;
// Button.propTypes = {
//     onClick:PropTypes.func
// }
// Button.defaultProps = {
//     onClick:undefined,
// }