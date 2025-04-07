import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import DiaryItem from './DiaryItem'
import './DiaryList.css'

const getSortedData = (data, sortType) => {
  return data.toSorted((a, b) => {
    if (sortType === 'oldest')
      return new Date(a.createdDate) - new Date(b.createdDate)
    return new Date(b.createdDate) - new Date(a.createdDate)
  })
}

const DiaryList = ({ data }) => {
  const navigate = useNavigate()
  const [sortType, setSortType] = useState('latest')
  const onChangeSortType = (e) => setSortType(e.target.value)

  return (
    <div className='DiaryList'>
      <div className='menu_bar'>
        <select onChange={onChangeSortType}>
          <option value={'latest'}>최신순</option>
          <option value={'oldest'}>오래된순</option>
        </select>
        <Button
          onClick={() => navigate('/new')}
          text={'새 일기 쓰기'}
          type={'POSITIVE'}
        />
      </div>
      <div className='list_wrapper'>
        {getSortedData(data, sortType).map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  )
}

export default DiaryList
