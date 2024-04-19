import { useState } from "react";
import { AddButton, Form, TodoList } from "../components";
import styles from "../styles";
import Spinner from "./Spinner";

function Todo() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  return (
    <main className="mt-[60px]">
      <div className={`${styles.TodoDiv}`}>
        {/* Box */}
        <div className={`${styles.box}`}>
          {/* Heading */}
          <div className="bg-primary ">
            <p className={`${styles.heading}`}>Todo List</p>
          </div>

          {/* Item Lists */}
          <div className={`${styles.listItem}`}>
            {data.length === 0 ? (
              <Spinner />
            ) : (
              <ul>
                {data.map((items) => (
                  <TodoList {...items} key={items.id} />
                ))}
              </ul>
            )}
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
