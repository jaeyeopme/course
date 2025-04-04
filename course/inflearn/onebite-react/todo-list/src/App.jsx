import { useReducer, useRef } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

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

function reducer(todos, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...todos]
    case 'UPDATE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      )
    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.id)
    default:
      return todos
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)

  const onCreate = (content) =>
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    })
  const onUpdate = (id) => dispatch({ type: 'UPDATE', id })
  const onDelete = (id) => dispatch({ type: 'DELETE', id })

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
