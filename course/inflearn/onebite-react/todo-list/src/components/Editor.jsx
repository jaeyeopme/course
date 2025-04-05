import { useContext, useRef, useState } from 'react'
import { TodoDispatchContext } from '../App'
import './Editor.css'

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext)
  const [content, setContent] = useState('')
  const contentRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus()
      return
    }
    onCreate(content)
    setContent('')
  }

  const onKeyDownContent = (e) => {
    if (e.keyCode == 13) onSubmit()
  }

  return (
    <div className='Editor'>
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDownContent}
        type='text'
        placeholder='새로운 Todo...'
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor
