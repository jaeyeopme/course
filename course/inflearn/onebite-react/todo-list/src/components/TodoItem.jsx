import { memo } from 'react'
import './TodoItem.css'

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  return (
    <div className='TodoItem'>
      <input checked={isDone} type='checkbox' onChange={() => onUpdate(id)} />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString('ko-KR')}</div>
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  )
}

// 고차 컴포넌트(HOC): 인자로 넘긴 컴포넌트에게 로직을 추가하여 엘리먼트를 반환하게 됨.
// React.memo 는 컴포넌트의 props 가 변경되지 않는 한 리렌더링을 방지함.
// 함수들은 App 컴포넌트가 재생성되면 주소 값이 바뀌어 변경된 것으로 인식하기 때문에 props 변경감지를 위한 콜백함수에서 명시적으로 제외.
export default memo(
  TodoItem,
  (prevProps, nextProps) =>
    prevProps.id === nextProps.id &&
    prevProps.isDone === nextProps.isDone &&
    prevProps.content === nextProps.content &&
    prevProps.date === nextProps.date
)
