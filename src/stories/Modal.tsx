import './Modal.css';

interface ModalProps{
  children:React.ReactNode;
  isOpen:boolean;
  onClose:()=>void;
}
const Modal :React.FC<ModalProps> = ({children, isOpen, onClose}) => {
  if(!isOpen) {
    return null;
  }

  return(
    <div className='modal-backdrop'>
      <div className='modal-box'>
        <button onClick={onClose} className='btn'>X</button>
        {children}
      </div>
    </div>
  );
}
export default Modal;