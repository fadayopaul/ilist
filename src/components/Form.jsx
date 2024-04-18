function Form() {
  return (
    <form>
      <div className="flex gap-5">
        <input
          type="text"
          className="textInput focus:ring-none focus:border-primary focus:ring-primary w-full rounded-lg border-none"
        />

        <button className="bg-primary rounded-3xl px-6 py-2 font-primary text-white">
          Send
        </button>
      </div>
    </form>
  );
}

export default Form;
