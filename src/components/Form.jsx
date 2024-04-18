function Form() {
  return (
    <form>
      <div className="flex gap-5">
        <input
          type="text"
          className="textInput w-full rounded-lg border-none outline-none"
        />

        <button className="bg-primary rounded-3xl px-6 py-2 font-primary text-white">
          Send
        </button>
      </div>
    </form>
  );
}

export default Form;
