import { useRef, useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

function App() {
  const mockData = [
    {
      id: 0,
      isDone: false,
      content: 'Learn React',
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: 'Learn Typescript',
      date: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: 'Learn Next',
      date: new Date().getTime(),
    },
  ]
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    const createdTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }
    setTodos([createdTodo, ...todos])
  }

  const onUpdate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const onDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id))

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
