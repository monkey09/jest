import Home from "@/pages/index"
import "@testing-library/jest-dom"
import { 
  fireEvent, 
  render, 
  screen 
} from "@testing-library/react"

describe("Calculator", () => {
  it("renders a calculator", () => {
    render(<Home />)
    expect(screen.getByTestId("result")).toBeInTheDocument()
    expect(screen.getByTestId("num1")).toBeInTheDocument()
    expect(screen.getByTestId("num2")).toBeInTheDocument()
    expect(screen.getByTestId("add")).toBeInTheDocument()
    expect(screen.getByTestId("subtract")).toBeInTheDocument()
    expect(screen.getByTestId("multiply")).toBeInTheDocument()
    expect(screen.getByTestId("divide")).toBeInTheDocument()
  })
  it("adds numbers", () => {
    render(<Home />)
    const num1input = screen.getByTestId("num1")
    const num2input = screen.getByTestId("num2")
    const addButton = screen.getByTestId("add")
    const resultArea = screen.getByTestId("result")
    fireEvent.change(num1input, { target: { value: 8 } })
    fireEvent.change(num2input, { target: { value: 5 } })
    fireEvent.click(addButton)
    expect(resultArea).toHaveTextContent("13")
  })
  it("subtracts numbers", () => {
    render(<Home />)
    const num1input = screen.getByTestId("num1")
    const num2input = screen.getByTestId("num2")
    const subtractButton = screen.getByTestId("subtract")
    const resultArea = screen.getByTestId("result")
    fireEvent.change(num1input, { target: { value: 8 } })
    fireEvent.change(num2input, { target: { value: 5 } })
    fireEvent.click(subtractButton)
    expect(resultArea).toHaveTextContent("3")
  })
  it("multiplies numbers", () => {
    render(<Home />)
    const num1input = screen.getByTestId("num1")
    const num2input = screen.getByTestId("num2")
    const multiplyButton = screen.getByTestId("multiply")
    const resultArea = screen.getByTestId("result")
    fireEvent.change(num1input, { target: { value: 8 } })
    fireEvent.change(num2input, { target: { value: 5 } })
    fireEvent.click(multiplyButton)
    expect(resultArea).toHaveTextContent("40")
  })
  it("divides numbers", () => {
    render(<Home />)
    const num1input = screen.getByTestId("num1")
    const num2input = screen.getByTestId("num2")
    const divideButton = screen.getByTestId("divide")
    const resultArea = screen.getByTestId("result")
    fireEvent.change(num1input, { target: { value: 8 } })
    fireEvent.change(num2input, { target: { value: 2 } })
    fireEvent.click(divideButton)
    expect(resultArea).toHaveTextContent("4")
  })
})

