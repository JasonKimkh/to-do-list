'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodo = localStorage.getItem('saveTodo');
    if(savedTodo) {
      setTodos(JSON.parse(savedTodo));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('saveTodo', JSON.stringify(todos));
  }, [todos]);

  const handleAddTask = (task: string) => {
    setTodos((prev) => [...prev, {id : Date.now(), task, completed: false}]);
  };

  const handleToggleComplete = (id: number) => {
    setTodos((prev) => 
    prev.map((todo) =>
    todo.id === id ? {...todo, complted: !todo.completed} : todo
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <main className="max-w xl mx-autu p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

      <TodoInput
      onAdd={handleAddTask}
      ></TodoInput>

      <TodoList
      todos={todos}
      onToggle={handleToggleComplete}
      onDelete={handleDeleteTask}
      >
      </TodoList>
    </main>
  )

    
  
}


export default TodoPage;