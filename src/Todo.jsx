import axios from "axios";
import { useEffect, useState } from "react";

function Todo() {
  const [data, setData] = useState([]);

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

  console.log(data);

  return (
    <main>
      <div className="h-screen bg-[#fce3c2] p-10">
        <div className="box">
          <div className="border-b-4 border-black py-6 text-center">
            <h1>Things to do</h1>
          </div>

          <div className="p-5 ">
            <ul>
              {data.map((items) => (
                <li key={items.id}>
                  <input type="checkbox" />{" "}
                  <span className="pl-2">{items.task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Todo;
