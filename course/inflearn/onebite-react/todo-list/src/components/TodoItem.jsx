import { memo, useContext } from 'react'
import { TodoDispatchContext } from '../App'
import './TodoItem.css'

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext)

  return (
    <div className='TodoItem'>
      <input checked={isDone} type='checkbox' onChange={() => onUpdate(id)} />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString('ko-KR')}</div>
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  )
}

export default memo(TodoItem)
