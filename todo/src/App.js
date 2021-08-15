import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
function App() {
  //create the state for the array of tasks
  const[todoArray, setTodoArray] = useState([]); //empty array at first 
  //create a function that adds the todo to the todo array
  const addTodo = (todo) => {
    //create and add to a new array
    const newTodo = [todo, ...todoArray];
    //set array to this new array
    setTodoArray(newTodo);
  }
  return (
    <div className="App">
    <TodoInput todoArray={todoArray} setTodoArray={setTodoArray} addTodo={addTodo}/>
    <TodoList todoArray={todoArray} setTodoArray={setTodoArray}/>
    </div>
  );
}

export default App;
