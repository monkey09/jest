import Todos from "@/pages/todos"
import "@testing-library/jest-dom"
import { 
  fireEvent, 
  render, 
  screen 
} from "@testing-library/react"

describe("Todos App", () => {
  it("renders todos page", () => {
    render(<Todos />)
    expect(screen.getByTestId("todo-input")).toBeInTheDocument() 
    expect(screen.getByTestId("add-todo")).toBeInTheDocument()
  })
  it("adds a todo", () => {
    render(<Todos />)
    const todoInput = screen.getByTestId("todo-input")
    const addButton = screen.getByTestId("add-todo")
    const todosList = screen.getByTestId("todos-list")
    fireEvent.change(todoInput, { target: { value: "a new todo" } })
    fireEvent.click(addButton)
    expect(todosList).toHaveTextContent("a new todo")
  })
  it("delets a todo", () => {
    render(<Todos />)
    const todoInput = screen.getByTestId("todo-input")
    const addButton = screen.getByTestId("add-todo")
    const todosList = screen.getByTestId("todos-list")
    fireEvent.change(todoInput, { target: { value: "a new todo" } })
    fireEvent.click(addButton)
    const deleteButton = screen.getByTestId("delete-todo-0")
    fireEvent.click(deleteButton)
    expect(todosList).toBeEmptyDOMElement()
  })
})