import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'
import Viewer from '../components/Viewer'
import useDiary from '../hooks/useDiary'
import usePageTitle from '../hooks/usePageTitle'
import { getDate } from '../util/get-date'

const Diary = () => {
  const navigate = useNavigate()
  const params = useParams()
   usePageTitle(`${params.id}번 일기`)

  const diary = useDiary(params.id)

  if (!diary) return <div>로딩중입니다...</div>
  const { createdDate, emotionId, content } = diary

  return (
    <div>
      <Header
        title={`${getDate(new Date(createdDate))} 기록`}
        left_child={<Button onClick={() => navigate(-1)} text={'뒤로가기'} />}
        right_child={
          <Button
            onClick={() => navigate(`/edit/${params.id}`)}
            text={'수정하기'}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  )
}

export default Diary
