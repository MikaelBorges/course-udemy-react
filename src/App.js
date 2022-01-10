import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>todos</h1>
      <Todo title="a" />
      <Todo title="b" />
      <Todo title="c" />
    </div>
  );
}

export default App;
