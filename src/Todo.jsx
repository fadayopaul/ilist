import axios from "axios";
import { useEffect, useState } from "react";

function Todo() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  async function getTodoData() {
    await axios
      .get("https://tododrf.onrender.com/todos?format=json")
      .then((response) => {
        setData(response.data);
      });
  }

  useEffect(() => {
    getTodoData();
  }, []);

  console.log(show);

  return (
    <main>
      <div className="h-screen bg-[#F6A89E] p-10">
        <div className="flex flex-col gap-9">
          <div className="box">
            <div className="border-b-4 border-black py-6 text-center">
              <h1 className="font-primary text-4xl font-extrabold">
                Things to do
              </h1>
            </div>

            <div className="p-5">
              <ul>
                {data.map((items) => (
                  <li key={items.id}>
                    <input
                      type="checkbox"
                      className="checkbox peer rounded-md border-gray-300 text-[#F6A89E] focus:ring-orange-300"
                    />
                    <label className="pl-3 ">{items.task}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="textbox">
            <div onClick={() => setShow((prev) => !prev)} className="py-3">
              <p className="font-primary inline-block cursor-pointer rounded-full bg-[#33322E] px-3.5 py-1 text-4xl font-medium text-white">
                +
              </p>
            </div>

            {show && (
              <form>
                <div className="flex gap-5">
                  <input
                    type="text"
                    className="textInput w-full rounded-lg border-none outline-none"
                  />

                  <button className="font-primary rounded-3xl bg-[#33322E] px-6 py-2 text-white">
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Todo;
