import { ReactComponent as CrossIcon } from "@assets/svg/modal-cross.svg";
import "./Modal.scss";

const Modal = ({ children, closeModal }) => {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      closeModal();
    }
  };

  return (
    <div className="backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        {children}
        <button onClick={closeModal} className="modal__cross">
          <CrossIcon />
        </button>
      </div>
    </div>
  );
};

export default Modal;
