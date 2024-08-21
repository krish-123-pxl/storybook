import Button from "./Button";
import React, { Children, Component } from "react";

export default {
    title:"Form/Button",
    Component:Button,
}

const Template = args => <Button {...args}/>

export const Success = Template.bind({});
Success.args={
    variantColor:'green',
    children:'Success'
}
export const Danger = Template.bind({});
Danger.args={
    variantColor:'red',
    children:'Danger'
}