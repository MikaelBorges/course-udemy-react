import Todo from "./components/Todo";
import "./App.css";

function App() {
  function reloadTodos() {
    console.log("reload Todos");
  }
  return (
    <div className="App">
      <h1 onClick={reloadTodos}>todos</h1>
      <Todo title="a" />
      <Todo title="b" />
      <Todo title="c" />
    </div>
  );
}

export default App;
