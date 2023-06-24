import { useState } from "react"
import styles from "../styles/Todos.module.css"

type todo_TP = string

const Todos = () => {
  const [todos, setTodos] = useState<todo_TP[]>([])
  const [newTodo, setNewTodo] = useState("")

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodos = [...todos, newTodo]
      setTodos(updatedTodos)
      setNewTodo("")
    }
  }
  const deleteTodo = (index: number) => {
    const updatedTodos = [...todos]
    updatedTodos.splice(index, 1)
    setTodos(updatedTodos)
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        value={newTodo}
        data-testid="todo-input"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo} className={styles.button} data-testid="add-todo">
        Add Todo
      </button>
      <ul className={styles.todoList} data-testid="todos-list">
        {todos.map((todo, index) => (
          <li key={index} className={styles.todoItem}>
            <span>{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              className={styles.button}
              data-testid={`delete-todo-${index}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos