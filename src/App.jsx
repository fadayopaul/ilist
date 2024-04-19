import { Todo } from "./components";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-screen overflow-scroll bg-white">
      <NavBar />
      <Todo />
    </div>
  );
}

export default App;
