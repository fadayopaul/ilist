import { Todo } from "./components";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-screen overflow-auto bg-white">
      <NavBar />
      <Todo />
    </div>
  );
}

export default App;
