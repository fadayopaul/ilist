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
      <div className="flex h-[80vh] flex-col justify-between px-5 py-10">
        <div className="box max-h-[50vh] overflow-y-auto">
          <div className="border-primary border-b-4 py-6 text-center">
            <p className="font-primary text-4xl font-extrabold">Things to do</p>
          </div>

          <div className="p-5">
            <ul>
              {data.map((items) => (
                <TodoList {...items} key={items.id} />
              ))}
            </ul>
          </div>
        </div>

        <div>
          <AddButton setShow={setShow} />

          <div className="py-3">
            {show && <Form getTodoData={getTodoData()} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Todo;
