import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'
import Viewer from '../components/Viewer'

const Diary = () => {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <div>
      <Header
        title={'다이어리'}
        left_child={<Button onClick={() => navigate(-1)} text={'뒤로가기'} />}
        right_child={
          <Button
            onClick={() => navigate(`/edit/${params.id}`)}
            text={'수정하기'}
          />
        }
      />
      <Viewer />
    </div>
  )
}

export default Diary
