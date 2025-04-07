import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DiaryStateContext } from '../App'

const useDiary = (id) => {
  const navigate = useNavigate()
  const data = useContext(DiaryStateContext)
  const [diary, setDiary] = useState()

  useEffect(() => {
    const diary = data.find((it) => String(it.id) === String(id))
    if (!diary) {
      window.alert('일기가 존재하지 않습니다.')
      navigate('/', { replace: true })
      return
    }
    setDiary(diary)
  }, [data, id, navigate])

  return diary
}

export default useDiary
