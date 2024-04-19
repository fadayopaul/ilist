import axios from "axios";
import { useEffect, useState } from "react";
import { AddButton, Form, TodoList } from "../components";

function Todo() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

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

  return (
    <main className="mt-[60px]">
      <div className="flex h-[90vh] flex-col justify-between px-5 py-3">
        <div className="box mb-5">
          {/* Heading */}
          <div className="bg-primary py-2">
            <p className="font-hand text-center text-2xl text-white">
              Todo List
            </p>
          </div>

          {/* Item Lists */}
          <div className="max-h-[50vh] overflow-y-auto px-3 py-5">
            <ul>
              {data.map((items) => (
                <TodoList {...items} key={items.id} />
              ))}
            </ul>
          </div>
        </div>

        {/* Form and Button */}
        <div>
          <AddButton show={show} setShow={setShow} />

          <div className={`${!show ? "block" : "collapse"}`}>
            {<Form getTodoData={getTodoData()} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Todo;
