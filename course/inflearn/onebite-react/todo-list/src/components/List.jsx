import { useState } from 'react'
import './List.css'
import TodoItem from './TodoItem'

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('')

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredTodos = () => {
    return search === ''
      ? todos
      : todos.filter((todo) =>
          todo.content.toLowerCase().includes(search.toLowerCase())
        )
  }

  return (
    <div className='List'>
      <h4>Todo List 🌱</h4>
      <input
        type='text'
        placeholder='검색어를 입력하세요.'
        value={search}
        onChange={onChangeSearch}
      />
      <div className='todos_wrapper'>
        {getFilteredTodos().map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default List
