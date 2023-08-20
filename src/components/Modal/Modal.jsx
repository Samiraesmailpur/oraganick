import "./Modal.scss";

const Modal = ({ children, closeModal }) => {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      closeModal();
    }
  };

  return (
    <div className="backdrop" onClick={handleBackdropClick}>
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
