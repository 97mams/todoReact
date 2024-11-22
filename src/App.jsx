import { useState } from "react"

function App() {

  const [todos, setTodos] = useState([{ id: 1, name: "mamisoa", checked: false }, { id: 2, name: "santatra", checked: false }])

  const onAction = async (formData) => {
    const todo = formData.get('todo')

    setTodos([...todos, {
      id: Date.now(),
      name: todo
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

  return (
    <div className="m-full flex flex-col p-10 gap-4">
      <h1 className="text-white text-4xl">Todo liste</h1>
      <form action={onAction} className="flex gap-2">
        <input type="text" name="todo" className="border border-white bg-zinc-700 text-white rounded-md px-4 py-3 flex-1" />
        <button
          className="border rounded-md bg-zinc-900 text-white px-2 py-3"
          type="submit"
        >
          Add
        </button>
      </form>
      <ul className="flex flex-col gap-4">
        {
          todos.map((todo) => (
            <li
              key={todo.id}
              className="bg-zinc-700 px-4 py-2 flex items-center text-white rounded-md"
            >
              <span className="flex-1 flex gap-2 items-baseline">
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => todoUpdateChecked(todo.id, {
                    checked: !todo.checked
                  })}
                />
                {todo.name}
              </span>
              <button
                className="border border-zinc-900 rounded-md p-2 text-sm"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
