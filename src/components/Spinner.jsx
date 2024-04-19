function Spinner() {
  return (
    <div className="flex h-[25vh] items-center justify-center space-x-2">
      <div className="bg-primary h-6 w-6 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
      <div className="bg-primary h-6 w-6 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
      <div className="bg-primary h-6 w-6 animate-bounce rounded-full"></div>
    </div>
  );
}

export default Spinner;
