import { emotionList } from '../util/constants'
import { getEmotionImage } from '../util/get-emotion-image'
import './Viewer.css'

const Viewer = () => {
  const emotionId = 3
  const emotionItem = emotionList.find(
    (it) => String(it.id) === String(emotionId)
  )

  return (
    <div className='Viewer'>
      <section className='img_section'>
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.name}</div>
        </div>
      </section>
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <div className='content_wrapper'>
          <p>오늘은 기분이 그럭저럭.</p>
        </div>
      </section>
    </div>
  )
}

export default Viewer
