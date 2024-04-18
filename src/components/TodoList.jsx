function TodoList(items) {
  return (
    <div className="py-2">
      <li className="list flex items-center justify-between p-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="checkbox text-secondary peer rounded-md border-gray-300 focus:ring-orange-300"
          />
          <label className="pl-3">{items.task}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <p>delete</p>
          <p>edit</p>
        </div>
      </li>
    </div>
  );
}

export default TodoList;
