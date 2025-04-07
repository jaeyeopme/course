import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Editor from '../components/Editor'
import Header from '../components/Header'

const New = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        left_child={<Button onClick={() => navigate(-1)} text={'뒤로가기'} />}
      />
      <Editor />
    </div>
  )
}

export default New
