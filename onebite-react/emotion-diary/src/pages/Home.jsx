import { useContext, useState } from 'react'
import { DiaryStateContext } from '../App'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import Header from '../components/Header'

const getMonthlyData = (data, pivotDate) => {
  return data.filter(
    (it) =>
      new Date(it.createdDate).getFullYear() === pivotDate.getFullYear() &&
      new Date(it.createdDate).getMonth() === pivotDate.getMonth()
  )
}

const Home = () => {
  const data = useContext(DiaryStateContext)
  const [pivotDate, setPivotDate] = useState(new Date())
  const monthlyData = getMonthlyData(data, pivotDate)

  const previousMonth = () => {
    const newDate = new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
    setPivotDate(newDate)
  }
  const nextMonth = () => {
    const newDate = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
    setPivotDate(newDate)
  }

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        left_child={<Button text={'<'} onClick={previousMonth} />}
        right_child={<Button text={'>'} onClick={nextMonth} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  )
}

export default Home
