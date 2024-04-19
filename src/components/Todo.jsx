import { useState } from "react";
import { AddButton, Form, TodoList } from "../components";

function Todo() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  return (
    <main className="mt-[60px]">
      <div className="flex h-[90vh] flex-col gap-3 px-5 py-3">
        {/* Box */}
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
            {<Form setData={setData} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Todo;
