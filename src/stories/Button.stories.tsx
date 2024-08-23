import Button from "./Button";
import { action } from '@storybook/addon-actions';

export default {
    title:"Form/Button",
    Component:Button,
    argTypes:{
        variantColor:{control:'color'},
        // width:{control:'select',options:['10%','20%','30%','50%','80%']}
    }
}

const Template = args => <Button {...args}/>
export const Success = Template.bind({});
Success.args = {
    variantColor:'green',
    innerText:'Primary',
    width:'20%',
    onClick:action('btn clicked')
}

    // export const Success = () => <Button variantColor="primary">Primary</Button>

// export const Danger = Template.bind({});
// Danger.args={
//     variantColor:'red',
//     children:'Danger'
// }