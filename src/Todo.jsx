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
    <div>
      <ul>
        {data.map((items) => (
          <li key={items.id}>{items.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
