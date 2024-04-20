import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";

/* eslint-disable react/prop-types */
function AddButton({ show, setShow }) {
  return (
    <div>
      <p
        className="cursor-pointer text-4xl"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? (
          <FaPlusCircle className="text-[#8CD4CB]" />
        ) : (
          <FaTimesCircle className="text-[#F6A89E]" />
        )}
      </p>
    </div>
  );
}

export default AddButton;
