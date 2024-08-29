import './Modal.css';

const Modal = ({children, isOpen, onClose}) => {
  if(!isOpen) {
    return null;
  }

  return(
    <div className='modal-backdrop'>
      <div className='modal-box'>
        <button onClick={onClose} className='btn'>close</button>
        {children}
      </div>
    </div>
  );
}
export default Modal;