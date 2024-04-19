/* eslint-disable react/prop-types */
function AddButton({ show, setShow }) {
  return (
    <div>
      <p
        onClick={() => setShow((prev) => !prev)}
        className="inline-block cursor-pointer rounded-full bg-[#33322E] px-5 py-1 font-primary text-4xl text-[18px] font-medium text-white"
      >
        {show ? "+" : "x"}
      </p>
    </div>
  );
}

export default AddButton;
