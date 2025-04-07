import { createContext, useReducer, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/NotFound'

const mockData = [
  {
    id: 3,
    createdDate: new Date('2025-04-03'),
    emotionId: 1,
    content: '3번 일기',
  },
  {
    id: 2,
    createdDate: new Date('2025-04-02'),
    emotionId: 1,
    content: '2번 일기',
  },

  {
    id: 1,
    createdDate: new Date('2025-04-01'),
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

export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

function App() {
  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(4)

  const onCreate = ({ createdDate, emotionId, content }) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    })
  }

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
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
