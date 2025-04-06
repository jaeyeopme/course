import { getEmotionImage } from '../util/get-emotion-image'
import Button from './Button'
import './DiaryItem.css'

const DiaryItem = () => {
  const emotionId = 2

  return (
    <div className='DiaryItem'>
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className='info_section'>
        <div className='created_date'>
          {new Date().toLocaleDateString('ko')}
        </div>
        <div className='content'>content</div>
      </div>
      <div className='button_section'>
        <Button text={'수정하기'} />
      </div>
    </div>
  )
}

export default DiaryItem
