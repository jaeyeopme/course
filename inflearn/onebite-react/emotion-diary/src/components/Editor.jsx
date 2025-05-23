import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { emotionList } from '../util/constants'
import { getDate } from '../util/get-date'
import Button from './Button'
import './Editor.css'
import EmotionItem from './EmotionItem'

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 1,
    content: '',
  })

  const onChangeInput = (e) => {
    if (e.target.name === 'createdDate') {
      setInput({ ...input, createdDate: new Date(e.target.value) })
      return
    }
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (initData)
      setInput({ ...initData, createdDate: new Date(initData.createdDate) })
  }, [initData])

  return (
    <div className='Editor'>
      <section className='date_section'>
        <h4>오늘의 날짜</h4>
        <input
          name={'createdDate'}
          onChange={onChangeInput}
          type='date'
          value={getDate(new Date(input.createdDate))}
        />
      </section>
      <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
          {emotionList.map((emotion) => (
            <EmotionItem
              name={'emotionId'}
              onClick={() =>
                onChangeInput({
                  target: { name: 'emotionId', value: emotion.id },
                })
              }
              key={emotion.id}
              {...emotion}
              isSelected={emotion.id === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <textarea
          onChange={onChangeInput}
          name={'content'}
          placeholder='오늘은 어땠나요?'
          value={input.content}
        ></textarea>
      </section>
      <section className='button_section'>
        <Button text={'취소하기'} onClick={() => navigate(-1)} />
        <Button
          text={'작성완료'}
          type={'POSITIVE'}
          onClick={() => onSubmit(input)}
        />
      </section>
    </div>
  )
}

export default Editor
