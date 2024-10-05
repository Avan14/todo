import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Createtodo } from "./components/Create_todo";
import { Todo } from "./components/Todo";

function App() {
  const [todos,settodos]=useState([]);
  fetch('http://localhost:3000/todo').then(async function(res) {
    const data = await res.json();
    settodos(data.todos);
  })
  return (
    <>
      <div>
        <Createtodo />
        <Todo todos={todos} />
      </div>
    </>
  );
}

export default App;
