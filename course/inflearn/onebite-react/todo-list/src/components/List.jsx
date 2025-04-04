import { useMemo, useState } from 'react'
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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length
    const doneCount = todos.filter((todo) => todo.isDone).length
    return { totalCount, doneCount, notDoneCount: totalCount - doneCount }
  }, [todos])

  return (
    <div className='List'>
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>not done: {notDoneCount}</div>
      </div>
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
