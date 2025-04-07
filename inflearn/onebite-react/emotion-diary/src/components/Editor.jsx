import './Editor.css'
import EmotionItem from './EmotionItem'

const emotionList = [
  {
    id: 1,
    name: '완전 좋음',
  },
  {
    id: 2,
    name: '좋음',
  },
  {
    id: 3,
    name: '그럭저럭',
  },
  {
    id: 4,
    name: '나쁨',
  },
  {
    id: 5,
    name: '끔찍함',
  },
]

const Editor = () => {
  const emotionId = 1

  return (
    <div className='Editor'>
      <section className='date_section'>
        <h4>오늘의 날짜</h4>
        <input type='date' value={new Date()} />
      </section>
      <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
          {emotionList.map((emotion) => (
            <EmotionItem
              key={emotion.id}
              {...emotion}
              isSelected={emotion.id === emotionId}
            />
          ))}
        </div>
      </section>
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <textarea placeholder='오늘은 어땠나요?'></textarea>
      </section>
      <section className='button_section'></section>
    </div>
  )
}

export default Editor
