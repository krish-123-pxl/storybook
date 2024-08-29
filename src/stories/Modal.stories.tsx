import { useState } from "react";
import Modal from "./Modal";

export default {
    title: 'Modal',
    content: Modal,
    argTypes: {
        isOpen: { control: 'boolean' },
    }
}


export const Template = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const closeModal = () => {
        setIsModalOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true)
    }

    return (
        <div>
            <button className="btn" onClick={openModal}>show Modal</button>
            <Modal onClose={closeModal} isOpen={isModalOpen}>
                <h2>Modal</h2>
                <p>provide modal content here.</p>
            </Modal>
        </div>
    )
}
// export const Primary = Template.bind({});
// Primary.args = {
//     isOpen:false
// }