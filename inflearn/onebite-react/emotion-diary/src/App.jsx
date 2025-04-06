import { createContext, useReducer, useRef } from 'react'
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
    id: 3,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: '3번 일기',
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: '2번 일기',
  },

  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기',
  },
]

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state]
    case 'UPDATE':
      return state.map((it) =>
        // PUT
        String(it.id) === String(action.data.id) ? action.data : it
      )
    case 'DELETE':
      return state.filter((it) => String(it.id) !== String(action.id))
    default:
      return state
  }
}

const DiaryStateContext = createContext()
const DiaryDispatchContext = createContext()

function App() {
  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(4)

  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    })
  }

  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createDate,
        emotionId,
        content,
      },
    })
  }

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    })
  }

  return (
    <>
      <Header
        title={'Header'}
        left_child={<Button text={'left'} />}
        right_child={<Button text={'right'} />}
      />
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
