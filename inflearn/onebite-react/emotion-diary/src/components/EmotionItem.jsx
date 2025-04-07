import { getEmotionImage } from '../util/get-emotion-image'
import './EmotionItem.css'

const EmotionItem = ({ id, name, isSelected }) => {
  return (
    <div className={`EmotionItem ${isSelected ? `EmotionItem_on_${id}` : ''}`}>
      <img className={'emotion_img'} src={getEmotionImage(id)} />
      <div className='emotion_name'>{name}</div>
    </div>
  )
}

export default EmotionItem
