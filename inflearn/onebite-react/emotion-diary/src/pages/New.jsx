import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DiaryDispatchContext } from '../App'
import Button from '../components/Button'
import Editor from '../components/Editor'
import Header from '../components/Header'

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext)
  const navigate = useNavigate()

  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        left_child={<Button onClick={() => navigate(-1)} text={'뒤로가기'} />}
      />
      <Editor onSubmit={onCreate} />
    </div>
  )
}

export default New
