import styles from "../styles";

/* eslint-disable react/prop-types */
function AddButton({ show, setShow }) {
  return (
    <div>
      <p className={`${styles.btn}`} onClick={() => setShow((prev) => !prev)}>
        {show ? "+" : "x"}
      </p>
    </div>
  );
}

export default AddButton;
