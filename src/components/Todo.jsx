import { useEffect, useState } from "react";
import { AddButton, Form, TodoList } from "../components";
import styles from "../styles";
import Spinner from "./Spinner";
import axios from "axios";
import EmptyList from "./EmptyList";

const API_URL = "https://tododrf.onrender.com/todos?format=json";

function Todo() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  /* Async function to get data from the api */
  async function getTodoData() {
    const response = await axios.get(API_URL);

    const responseData = response.data;
    setData(responseData);
    setIsLoading(false);
  }

  useEffect(() => {
    getTodoData();
  }, []);

  // Sort the todo items, with uncompleted items first and newer uncompleted items at the top
  const sortedTodoItems = data.sort((a, b) => {
    if (a.completed === b.completed) {
      // If both items are completed or uncompleted, sort by ID in descending order
      // to keep newer uncompleted items at the top
      return b.id - a.id;
    }
    // Uncompleted items come first
    return a.completed ? 1 : -1;
  });

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
            {isLoading ? (
              <Spinner />
            ) : data.length === 0 ? (
              <EmptyList />
            ) : (
              <ul>
                {sortedTodoItems.map((items) => (
                  <TodoList
                    {...items}
                    getTodoData={getTodoData}
                    key={items.id}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Form and Button */}
        <div>
          <AddButton show={show} setShow={setShow} />

          <div className={`${!show ? "block" : "collapse"}`}>
            {<Form getTodoData={getTodoData} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Todo;
