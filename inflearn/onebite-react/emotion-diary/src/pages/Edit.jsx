import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DiaryDispatchContext } from '../App'
import Button from '../components/Button'
import Editor from '../components/Editor'
import Header from '../components/Header'
import useDiary from '../components/useDiary'

const Edit = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext)
  const diary = useDiary(params.id)

  const onClickDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDelete(params.id)
      navigate('/', { replace: true })
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
