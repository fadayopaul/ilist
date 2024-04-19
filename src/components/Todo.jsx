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
    <main>
      <div className="flex h-[80vh] flex-col justify-between px-5">
        <div className="box">
          <div className="bg-primary py-4">
            <p className="font-hand text-center text-4xl text-white">
              Todo List
            </p>
          </div>

          <div className="max-h-[50vh] overflow-y-auto p-5">
            <ul>
              {data.map((items) => (
                <TodoList {...items} key={items.id} />
              ))}
            </ul>
          </div>
        </div>

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
