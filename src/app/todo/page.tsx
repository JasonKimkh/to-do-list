'use client'

import { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";;
import { Todo } from "../interface/Todo";

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showCompleted, setShowCompleted] = useState<boolean>(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTask, setEditTask] = useState<string>("");

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
    todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const startEditing = (id: number, task: string) => {
    setEditingId(id);
    setEditTask(task);
  }

  const handleSaveEdit = (id: number) => {
    setTodos((prev) => 
    prev.map((todo) => 
    todo.id === id ? {...todo, task: editTask} : todo
    )
    );
    setEditingId(null);
  }

  return (
    <main className="max-w xl mx-autu p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

      <TodoInput
      onAdd={handleAddTask}
      ></TodoInput>

     <button
        onClick={() => setShowCompleted((prev) => !prev)}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        {showCompleted ? "완료된 항목 숨기기" : "완료된 항목 보기"}
      </button>

      <TodoList
      todos={todos}
      showCompleted={showCompleted}
      onToggle={handleToggleComplete}
      onDelete={handleDeleteTask}
      editingId={editingId}          
      editTask={editTask}            
      startEditing={startEditing}    
      setEditTask={setEditTask}     
      handleSaveEdit={handleSaveEdit} 
      >
      </TodoList>
    </main>
  )

    
  
}


export default TodoPage;