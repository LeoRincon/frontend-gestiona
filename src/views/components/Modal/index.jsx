import "./styles.css";
import { CloseButton } from "../Buttons";
import { useRef, useEffect } from "react";

const Modal = ({ children, className, isOpen = false, onClose, containerClassName }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <dialog className={`modal-component ${className}`} ref={modalRef}>
      <CloseButton className={"btn-close"} onClick={handleClose} />
      <section className={`modal-content ${containerClassName}`}>{children}</section>
    </dialog>
  );
};

export default Modal;
