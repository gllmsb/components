import { Button } from "../Button/Button";

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; 
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
          <Button text="Close" onClick={onClose}/>
        </div>
      </div>
    );
  };
  