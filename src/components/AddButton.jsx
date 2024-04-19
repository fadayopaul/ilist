/* eslint-disable react/prop-types */
function AddButton({ setShow }) {
  return (
    <div>
      <p
        onClick={() => setShow((prev) => !prev)}
        className="inline-block cursor-pointer rounded-full bg-[#33322E] px-3.5 py-1 font-primary text-4xl font-medium text-white"
      >
        +
      </p>
    </div>
  );
}

export default AddButton;
