import Button from "./Button";
import { action } from '@storybook/addon-actions';

export default {
    title:"Form/Button",
    Component:Button,
    argTypes:{
        variantColor:{control:'text'},
        // width:{control:'select',options:['10%','20%','30%','50%','80%']}
    }
}
interface ButtonProps{
    innerText:string;
    width:string;
    textColor:string;
    onClick:()=>void;
}

const Template:typeof Button = args => <Button {...args}/>
export const MyButton:React.FC<ButtonProps> = Template.bind({});
MyButton.args = {
    variantColor:'green',
    innerText:'Primary',
    width:'20%',
    textColor:'white',
    onClick:action(('btn clicked')) 
}