import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DiaryDispatchContext, DiaryStateContext } from '../App'
import Button from '../components/Button'
import Editor from '../components/Editor'
import Header from '../components/Header'

const Edit = () => {
  const isDeletedRef = useRef(false)
  
  const params = useParams()
  const navigate = useNavigate()
  
  const data = useContext(DiaryStateContext)
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext)
  const [diary, setDiary] = useState()

  useEffect(() => {
    if (isDeletedRef.current) return
    const diary = data.find((it) => String(it.id) === String(params.id))
    if (!diary) {
      window.alert('일기가 존재하지 않습니다.')
      navigate('/', { replace: true })
      return
    }

    setDiary(diary)
  }, [data, params.id, navigate])

  const onClickDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDelete(params.id)
      navigate('/', { replace: true })
      isDeletedRef.current = true
    }
  }

  const onSubmit = (input) => {
    if (window.confirm('일기를 수정하시겠습니까?')) {
      onUpdate({ id: params.id, ...input })
      navigate('/', { replace: true })
    }
  }

  return (
    <div>
      <Header
        title={'일기 수정하기'}
        left_child={<Button onClick={() => navigate(-1)} text={'뒤로가기'} />}
        right_child={
          <Button onClick={onClickDelete} text={'삭제하기'} type={'NEGATIVE'} />
        }
      />
      <Editor onSubmit={onSubmit} initData={diary} />
    </div>
  )
}

export default Edit
