import { useState } from "react"
import { Button } from "./components/Button"

function App() {

  const [todos, setTodos] = useState([])

  const onAction = async (formData) => {
    const todo = formData.get('todo')

    setTodos([...todos, {
      id: Date.now(),
      name: todo,
      completed: false
    }])
  }

  const todoUpdateChecked = (id, newTodo) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...newTodo }
      }
      return todo
    }))
  }

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const onUpdate = async (formData) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === formData.id) {
          return { ...todo, ...formData.todoUpdate }
        }
        return todo
      })
    )
    alert('update')

  }

  return (
    <div className="m-full flex flex-col p-10 gap-4">
      <h1 className="text-white text-4xl">Todo liste</h1>
      <form action={onAction} className="flex gap-2">
        <input type="text" name="todo" className="border border-white bg-zinc-700 text-white rounded-md px-4 py-3 flex-1" />
        <Button
          type="submit"
        >
          Add
        </Button>
      </form>
      <ul className="flex flex-col gap-4">
        {
          todos.map((todo) => (
            <li
              key={todo.id}
            >
              <form
                className="bg-zinc-700 px-4 py-2 flex items-center text-white rounded-md"
                action={onUpdate}
              >
                <span className="flex-1 flex gap-2 items-baseline">
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() => todoUpdateChecked(todo.id, {
                      checked: !todo.checked
                    })}
                  />
                  <input type="number" hidden name="id" defaultValue={todo.id} />
                  <input
                    type="text"
                    defaultValue={todo.name}
                    name="todoUpdate"
                    disabled={todo.checked}
                    className="bg-zinc-700 outline-none flex-1" />
                </span>
                <div className="flex gap-2">
                  <button
                    className="border border-zinc-900 rounded-md p-2 text-sm"
                    type="submit"
                    disabled={todo.checked}
                  >
                    update
                  </button>
                  <Button
                    onclick={() => onDelete(todo.id)}
                  >
                    Delete
                  </Button>
                </div>
              </form>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
