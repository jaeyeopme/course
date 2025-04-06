import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Header
        title={new Date().toLocaleDateString('ko')}
        left_child={<Button text={'<'} />}
        right_child={<Button text={'>'} />}
      />
      <DiaryList />
    </div>
  )
}

export default Home
