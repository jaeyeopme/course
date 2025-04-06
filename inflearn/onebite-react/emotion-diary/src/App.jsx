import { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/NotFound'

const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기',
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: '2번 일기',
  },
  {
    id: 3,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: '3번 일기',
  },
]

function reducer(state, action) {
  return state
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData)

  return (
    <>
      <Header
        title={'Header'}
        left_child={<Button text={'left'} />}
        right_child={<Button text={'right'} />}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
