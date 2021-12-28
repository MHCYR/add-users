import Button from "./Button";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <div className={styles.modal__actions}>
          <Button type="button" onClick={props.onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
