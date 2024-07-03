
import AppName from "./components/AppName"
import AddToDo from "./components/AddTodo"
import ToDoItem1 from "./components/TodoItem1"
import ToDoItem2 from "./components/TodoItem2"
import "./App.css"
function App() {
 

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <div className="items-container">
        <ToDoItem1 />
        <ToDoItem2 />
      </div>
    </center>
  );
}

export default App
